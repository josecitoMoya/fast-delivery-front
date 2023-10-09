import React, { useState, useMemo, useEffect } from "react";
import {
  GoogleMap,
  Libraries,
  MarkerF,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "@/styles/Map.css";
import { NextPage } from "next";
import { LatLngLiteral } from "@googlemaps/google-maps-services-js";

interface Props {
  coords: LatLngLiteral;
}

const libraries: Libraries = ["places"];

const Map: NextPage<Props> = ({ coords }) => {
  const Key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: Key,
    libraries,
  });
  const [latitude, setLatitude] = useState(-34.7315);
  const [longitude, setLongitude] = useState(-58.37723);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );

  async function calculateRoute() {
    if (typeof google !== "undefined") {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: center,
        destination: coords,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
    } else {
      alert("La API de Google Maps no está disponible.");
    }
  }

  const mapOptions = {
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 500,
      maximumAge: 0,
    };

    const success = (geolocationPosition: any) => {
      const { latitude, longitude } = geolocationPosition.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, null, options);
    } else {
      console.error("El usuario no tiene disponible la geolocalización");
    }
    console.log(center);

    if (isLoaded) {
      calculateRoute();
    }
  }, [center, isLoaded]);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <GoogleMap
            mapContainerClassName="mapStyle"
            center={center}
            zoom={10}
            options={mapOptions}
          >
            {/* <MarkerF position={center} />
            <MarkerF position={coords} /> */}

            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </>
      )}
    </div>
  );
};
export default Map;
