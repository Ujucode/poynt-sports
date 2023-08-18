const Hero = (props) => {
  return (
    <section className={`${props.className} my-4`}>{props.children}</section>
  );
};

export default Hero;
