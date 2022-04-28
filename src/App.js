import { useEffect } from "react";
import API_IPGEOLOCATION from "./API";
import arrow from "./assets/icon-arrow.svg";
import IpInfo from "./IpInfo";
import Map from "./Map";

function App() {
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_IPGEOLOCATION}`
    )
      .then(response => response.json())
      .then(ipData => console.log(ipData))
      .catch(err => err.message);
  }, []);

  console.log(API_IPGEOLOCATION);

  return (
    <div className="App min-h-[828px]">
      {/* wrapper */}
      <div className="min-h-[100vh] font-rubik ">
        <header className="relative min-h-[40vh] bg-background bg-no-repeat bg-center bg-cover">
          <div className="text-center h-full max-w-[1440px] mx-auto">
            <h1 className="py-8 text-3xl text-white">IP Address Tracker</h1>

            <form className="relative max-w-[828px] mx-auto">
              <input
                type="text"
                id=""
                className="w-[80%] p-4 min-h-[40px] rounded-2xl 
                focus-visible:outline-none md:max-w-3xl md:text-lg md:min-h-[]"
              />
              <img
                src={arrow}
                alt="arrow icon"
                className="bg-black absolute top-0 right-[10%] h-full
               p-4 cursor-pointer hover:opacity-70 rounded-r-2xl"
              />
            </form>
          </div>

          {/* ip info */}
          <IpInfo />
        </header>

        <Map />
      </div>
    </div>
  );
}

export default App;
