import { useEffect, useState, useRef } from "react";
import API_IPGEOLOCATION from "./API";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import arrow from "./assets/icon-arrow.svg";
import IpInfo from "./IpInfo";
// import Map from "./Map";
// import {useMap} from "react-leaflet"

function App() {
  const [ipify, setIpify] = useState(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_IPGEOLOCATION}`
  );
  const [ipInfo, setIpinfo] = useState(null);

  // get user input from with the help of useRef
  const ipDomain = useRef(null);

  useEffect(() => {
    fetch(ipify)
      .then(response => response.json())
      .then(ipData => {
        console.log(ipData);
        setIpinfo(ipData);
      })
      .catch(err => err.message);
  }, [ipify]);

  const MyMap = () => {
    const map = useMap();
    map.flyTo(ipInfo ? [ipInfo.location.lat, ipInfo.location.lng] : null, 12, {
      duration: 2,
    });
    return null;
  };

  const submitHandler = e => {
    e.preventDefault();

    // pointer at user input
    let userInput = "";

    // check if user input is an ip(purely numbers) or domain address(combo of numbers&letters) with aid of regex
    if (/[a-zA-Z]/.test(ipDomain.current.value)) {
      userInput = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_IPGEOLOCATION}&domain=${ipDomain.current.value}`;
    } else {
      userInput = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_IPGEOLOCATION}&ipAddress=${ipDomain.current.value}`;
    }

    // update state value with user input value
    setIpify(userInput);

    // for clearing input(optional)
    // ipDomain.current.value = "";
  };

  return (
    <div className="App min-h-[828px]">
      {/* wrapper */}
      <div className="min-h-[100vh] font-rubik ">
        <header className="relative min-h-[40vh] bg-background bg-no-repeat bg-center bg-cover">
          <div className="text-center h-full max-w-[1440px] mx-auto">
            <h1 className="py-8 text-3xl text-white">IP Address Tracker</h1>

            <form
              className="relative max-w-[828px] mx-auto"
              onSubmit={submitHandler}
            >
              <input
                type="text"
                id=""
                className="w-[80%] font-rubik p-4 min-h-[40px] rounded-2xl 
                focus-visible:outline-none md:max-w-3xl md:text-lg md:min-h-[]"
                placeholder="Searh for any IP address or Domain"
                ref={ipDomain}
              />
              <img
                src={arrow}
                alt="arrow icon"
                className="bg-black absolute top-0 right-[10%] h-full
               p-4 cursor-pointer hover:opacity-70 rounded-r-2xl"
                onClick={submitHandler}
              />
            </form>
          </div>

          {/* ip info */}
          <IpInfo ipInfo={ipInfo} />
        </header>

        {/* map */}
        {ipInfo ? (
          <MapContainer
            center={[ipInfo.location.lat, ipInfo.location.lng]}
            zoom={12}
            scrollWheelZoom={false}
          >
            {/* {console.log(props.ipInfo)} */}
            <MyMap />

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ipInfo.location.lat, ipInfo.location.lng]}>
              <Popup>
                Ip Address <br /> Current location.
                {/* A pretty CSS3 popup. <br /> Easily customizable. */}
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div className="text-2xl font-bold text-center font-rubik">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

// export MyMap;
export default App;
