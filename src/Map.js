import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = () => {
  // const [] = useMap()

  return (
    <MapContainer center={[9.06405, 7.45796]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[9.06405, 7.45796]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
