import arrow from "./assets/icon-arrow.svg";
import IpInfo from "./IpInfo";
import Map from "./Map";

function App() {
  return (
    <div className="App min-h-[828px]">
      {/* wrapper */}
      <div className="min-h-[100vh] font-rubik ">
        <header className="relative min-h-[40vh] bg-background bg-no-repeat bg-center bg-cover">
          <div className="text-center h-full max-w-[1440px] mx-auto">
            <h1 className="text-white text-3xl py-8">IP Address Tracker</h1>

            <form className="relative">
              <input
                type="text"
                id=""
                className="w-[90%] p-4 min-h-[40px] rounded-2xl focus-visible:outline-none"
              />
              <img
                src={arrow}
                alt="arrow icon"
                className="bg-black absolute top-0 right-[5%] h-full
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
