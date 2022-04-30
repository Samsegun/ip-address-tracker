import loadingGif from "./assets/Rolling-1.1s-200px.gif";

const IpInfo = props => {
  return (
    <div
      className="bg-white rounded-2xl text-center
     absolute w-[90%] left-1/2 top-[70%] -translate-x-2/4 shadow-xl
     max-w-[1440px] mx-auto z-10 md:w-[80%]"
    >
      {/* same logic for checking errors in parent element(App.js) */}
      {"location" in props.ipInfo && (
        <ul className="flex flex-col items-center p-4 md:justify-around md:flex-row">
          <li className="my-2 basis-1/4 lg:border-r md:px-4 md:text-left">
            <span className="text-sm font-medium text-gray-400">
              IP ADDRESS
            </span>
            <h2 className="text-2xl font-medium">{props.ipInfo.ip}</h2>
          </li>
          <li className="my-2 basis-1/4 lg:border-r md:px-4 md:text-left">
            <span className="text-sm font-medium text-gray-400">LOCATION</span>
            <h2 className="text-sm font-bold">
              {props.ipInfo.location.city} <br />
              {props.ipInfo.location.region}, {props.ipInfo.location.country}
            </h2>
          </li>
          <li className="my-2 basis-1/4 lg:border-r md:px-4 md:text-left">
            <span className="text-sm font-medium text-gray-400">TIMEZONE</span>
            <h2 className="text-2xl font-medium">
              {props.ipInfo.location.timezone}
            </h2>
          </li>
          <li className="my-2 basis-1/4 md:px-4 md:text-left">
            <span className="text-sm font-medium text-gray-400">ISP</span>
            <h2 className="text-2xl font-medium">{props.ipInfo.isp}</h2>
          </li>
        </ul>
      )}

      {"code" in props.ipInfo && (
        <div className="px-4 py-6 rounded-2xl text-2xl font-bold text-center font-rubik bg-[#f1f2f3]">
          {props.ipInfo.messages}
        </div>
      )}

      {"loading" in props.ipInfo && (
        <img src={loadingGif} alt="loading" className="w-12 mx-auto" />
      )}

      {props.fetchError && (
        <div className="py-6 text-3xl font-bold text-center font-rubik">
          {props.fetchError} Ip details
        </div>
      )}
    </div>
  );
};

export default IpInfo;
