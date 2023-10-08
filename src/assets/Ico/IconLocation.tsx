import icon from './pin.svg'
import L from 'leaflet'
export const  IconLocation = L.icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconSize: [35, 35],
  className: "leaflet-venue-icon"
})

