import { Link } from "react-router-dom";

const FlowBiteCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg  shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
      <Link to="/">
        <img
          className="rounded-t-lg "
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
          alt=""
        />
      </Link>
      <div className="p-1">
        <p className="mb-1 font-normal text-gray-700">Football</p>
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
          Alex Ferguson
        </h5>
      </div>
    </div>
  );
};

export default FlowBiteCard;
