const Input = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
