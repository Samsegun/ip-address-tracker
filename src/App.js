import { useEffect, useState, useRef } from "react";
import API_IPGEOLOCATION from "./API";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import arrow from "./assets/icon-arrow.svg";
import loadingGif from "./assets/Rolling-1.1s-200px.gif";
import IpInfo from "./IpInfo";

function App() {
  const [ipify, setIpify] = useState(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_IPGEOLOCATION}`
  );
  const [ipInfo, setIpinfo] = useState({ loading: "Loading..." });
  const [fetchError, setFetchError] = useState("");
  // for ip info styling
  const [top, setTop] = useState(false);

  // get user input from with the help of useRef
  const ipDomain = useRef(null);

  // fetch request using useEffect and fetch api
  useEffect(() => {
    fetch(ipify)
      .then(response => {
        return response.json();
      })
      .then(ipData => {
        // console.log(ipData);
        setIpinfo(ipData);
        setFetchError("");
      })
      .catch(err => {
        // this is for handling network error NOT server or api error
        setIpinfo({});
        setFetchError(err.message);
      });
  }, [ipify]);

  // set map coordinates
  const MyMap = () => {
    // to set new coordinates, flyTo can be used or setView (flyTo provides animation when resetting to new coordinates)
    const map = useMap();
    map.flyTo(ipInfo ? [ipInfo.location.lat, ipInfo.location.lng] : null, 12, {
      duration: 2,
    });
    return null;
  };

  // form submit handler
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

    // reset ip info top
    setTop(false);

    // for clearing input(optional)
    // ipDomain.current.value = "";
  };

  // focus handler
  const focusHandler = () => {
    setTop(true);
  };

  return (
    <div className="App min-h-[828px]">
      {/* wrapper */}
      <div className="relative min-h-[100vh] font-rubik ">
        <header className="relative min-h-[40vh] bg-background bg-no-repeat bg-center bg-cover">
          <div className="text-center h-full max-w-[1440px] mx-auto">
            <h1 className="py-8 text-3xl text-white">
              <a href="/">IP Address Tracker</a>
            </h1>

            <form
              className="relative max-w-[828px] mx-auto"
              onSubmit={submitHandler}
            >
              <input
                type="text"
                className={
                  ipInfo.code
                    ? "w-[90%] font-rubik bg-red-300 p-4 min-h-[40px] rounded-2xl text-white focus-visible:outline-none md:max-w-3xl md:text-lg md:w-[80%]"
                    : "w-[90%] font-rubik p-4 min-h-[40px] rounded-2xl text-base focus-visible:outline-none md:max-w-3xl md:text-lg md:w-[80%]"
                }
                placeholder="Search for any IP address or Domain"
                ref={ipDomain}
                onFocus={focusHandler}
              />
              <img
                src={arrow}
                alt="arrow icon"
                className="bg-black absolute top-0 right-[5%] h-full
               p-4 cursor-pointer hover:bg-[#413e3e] rounded-r-2xl"
                onClick={submitHandler}
              />
            </form>
          </div>

          {/* IP INFORMATION */}
          <IpInfo ipInfo={ipInfo} fetchError={fetchError} top={top} />
        </header>

        {/* MAP */}
        {/* checking for valid requests before rendering data */}
        {/* if ipInfo contains "location",then request is valid else request is invalid */}
        {ipInfo.hasOwnProperty("location") && (
          <MapContainer
            center={[ipInfo.location.lat, ipInfo.location.lng]}
            zoom={12}
            scrollWheelZoom={false}
          >
            <MyMap />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ipInfo.location.lat, ipInfo.location.lng]}>
              <Popup>
                Ip Address <br /> Current location.
              </Popup>
            </Marker>
          </MapContainer>
        )}

        {/* if "code" exists in ipInfo (invalid request), display error messages */}
        {ipInfo.hasOwnProperty("code") && (
          <div className="px-4 py-10 text-2xl font-bold text-center font-rubik">
            {ipInfo.messages}
          </div>
        )}

        {/* if "loading" exists in ipInfo (sending request), display spining image */}
        {ipInfo.hasOwnProperty("loading") && (
          <img src={loadingGif} alt="loading" className="mx-auto my-8" />
        )}

        {/* if network error, display error details */}
        {fetchError && (
          <div className="px-4 py-24 text-3xl font-bold text-center text-red-400 font-rubik">
            {fetchError} Map
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
