// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// const MyMap = props => {
//   const map = useMap();
//   // map.setView(props.center, props.zoom);
//   map.setView([props.ipInfo.location.lat, props.ipInfo.location.lng], 12);
//   return null;
// };

// const Map = props => {
//   return props.ipInfo ? (
//     <MapContainer
//       center={[props.ipInfo.location.lat, props.ipInfo.location.lng]}
//       zoom={12}
//       scrollWheelZoom={false}
//     >
//       {/* {console.log(props.ipInfo)} */}
//       <MyMap />

//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[props.ipInfo.location.lat, props.ipInfo.location.lng]}>
//         <Popup>
//           Ip Address <br /> Current location.
//           {/* A pretty CSS3 popup. <br /> Easily customizable. */}
//         </Popup>
//       </Marker>
//     </MapContainer>
//   ) : (
//     <div className="text-2xl font-bold text-center font-rubik">Loading...</div>
//   );
// };

// export default Map;
