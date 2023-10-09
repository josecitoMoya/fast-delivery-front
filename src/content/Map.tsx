import React, { useState, useMemo, useEffect } from "react";
import {
  GoogleMap,
  MarkerF,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import "@/styles/Map.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Map = () => {
  const Key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: Key,
    libraries: ["places"],
  });
  const { value, setValue, clearSuggestions } = usePlacesAutocomplete();
  const [latitude, setLatitude] = useState(-34.7315);
  const [longitude, setLongitude] = useState(-58.37723);
  const [selected, setSelected] = useState({ lat: 0, lng: 0 });
  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );
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
  }, [center]);

  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });

    const { lat, lng } = getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <GoogleMap mapContainerClassName="mapStyle2">
            {/* ESTE INPUT ESTA ACA SOLAMENTE DE PRUEBA PARA VER EL AUTOCOMPLETE DE GOOGLE, DESP LO QUIERO COLOCAR EN ADD-PACKAGE 
        ASI CUANDO PONEMOS LA DIRECCION DEL PAQUETE SIEMPRE NOS DA UNA GOOGLE Y NO NOS EQUIVOCAMOS */}
            <StandaloneSearchBox>
              <input
                onBlur={(e) => {
                  handleSelect(e.target.value);
                }}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="text"
                placeholder="Customized your placeholder"
                className="inputStyle2"
              />
            </StandaloneSearchBox>
          </GoogleMap>

          <GoogleMap
            mapContainerClassName="mapStyle"
            center={center}
            zoom={10}
            options={mapOptions}
          >
            {/* ESTE MARKER MUESTRA LA GEOLOCALIZACION */}
            <MarkerF position={center} />
            {/* ESTE MARKER MUESTRA LA UBICACION QUE PONEMOS EN EL INPUT */}
            {selected.lat !== 0 && selected.lng !== 0 ? (
              <MarkerF position={selected} />
            ) : (
              ""
            )}
          </GoogleMap>
        </>
      )}
    </div>
  );
};
export default Map;
