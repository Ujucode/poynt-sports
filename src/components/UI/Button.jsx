const Button = (props) => {
  return (
    <div className=" ">
      <button
        className={`px-5 py-3 text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 ${props.className}`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
