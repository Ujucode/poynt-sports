import classes from "./Layout.module.css";

const Footer = () => {
  return (
    <footer className="bg-blue-950">
      <div className={`${classes["header-container"]} `}>
        <h1>Footer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          reprehenderit fuga labore numquam quasi exercitationem distinctio
          laboriosam laborum nesciunt nemo, qui eius optio perferendis doloribus
          soluta aliquid necessitatibus. Ullam, non?
        </p>
      </div>
    </footer>
  );
};

export default Footer;
