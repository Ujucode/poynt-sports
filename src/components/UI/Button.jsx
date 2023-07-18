const Button = (props) => {
  const { className } = props;

  return (
    <div className="">
      <button className={` ${className}`}>{props.children}</button>
    </div>
  );
};

export default Button;
