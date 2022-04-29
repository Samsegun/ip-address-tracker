const IpInfo = props => {
  return (
    <div
      className="bg-white rounded-2xl text-center
     absolute w-[80%] left-1/2 top-[70%] -translate-x-2/4 shadow-xl
     max-w-[1440px] mx-auto z-10"
    >
      {props.ipInfo ? (
        <ul className="flex flex-col items-center p-4 md:justify-around md:flex-row">
          <li className="my-2 basis-1/4 lg:border-r md:px-4 md:text-left">
            <span className="text-sm font-medium text-gray-400">
              IP ADDRESS
            </span>
            <h2 className="text-2xl font-medium">{props.ipInfo.ip}</h2>
          </li>
          <li className="my-2 basis-1/4 lg:border-r md:px-4 md:text-left">
            <span className="text-sm font-medium text-gray-400">LOCATION</span>
            <h2 className="text-xl font-medium">
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
      ) : (
        <div className="text-2xl font-bold text-center font-rubik">
          Loading...
        </div>
      )}
    </div>
  );
};

export default IpInfo;
