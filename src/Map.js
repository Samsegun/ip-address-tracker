import { MapContainer, TileLayer, useMap } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <div position={[51.505, -0.09]}>
        <div>
          A pretty CSS3 popup. <br /> Easily customizable.
        </div>
      </div>
    </MapContainer>
  );
};

export default Map;
