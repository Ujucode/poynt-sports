const Button = (props) => {
  return (
    <div className="">
      <button {...props}>{props.children}</button>
    </div>
  );
};

export default Button;
