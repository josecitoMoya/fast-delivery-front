"use client"
import { MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import "@/styles/Map.css";
import {IconLocation} from "@/assets/Ico/IconLocation";



const Map = () => {
  


 return( <div >
    <MapContainer className='map' center={[51.505, -0.09]} zoom={12} scrollWheelZoom={true}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  {/* <Marker position={[51.505, -0.09]} icon={IconLocation}>
  <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
</MapContainer>
  </div>)
}
export default Map;