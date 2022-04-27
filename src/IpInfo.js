const IpInfo = () => {
  return (
    <div
      className="bg-white rounded-2xl text-center
     absolute w-[90%] left-1/2 top-[70%] -translate-x-2/4 shadow-xl
     max-w-[1440px] mx-auto z-10"
    >
      <ul className="flex flex-col py-4 sm:flex-row">
        <li className="my-2">
          <span className="text-sm font-medium text-gray-400">IP ADDRESS</span>
          <h2 className="text-2xl font-medium">192.212.174.101</h2>
        </li>
        <li className="my-2">
          <span className="text-sm font-medium text-gray-400">LOCATION</span>
          <h2 className="text-2xl font-medium">Brooklyn, NY 10001</h2>
        </li>
        <li className="my-2">
          <span className="text-sm font-medium text-gray-400">TIMEZONE</span>
          <h2 className="text-2xl font-medium">UTC -05:00</h2>
        </li>
        <li className="my-2">
          <span className="text-sm font-medium text-gray-400">ISP</span>
          <h2 className="text-2xl font-medium">SpaceX Starlink</h2>
        </li>
      </ul>
    </div>
  );
};

export default IpInfo;
