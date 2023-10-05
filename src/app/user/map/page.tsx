"use client"
import { MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import "@/styles/Map.css";
const Map = () => {
  console.log(MapContainer);
  


 return( <div className="cont-map">
    <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  </div>)
}
export default Map;
