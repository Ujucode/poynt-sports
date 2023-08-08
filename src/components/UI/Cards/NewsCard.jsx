import img1 from "../../../assets/new-updates1.png";

const NewsCard = () => {
  return (
    <div className=" ">
      <div className="">
        <img className=" w-96" src={img1} alt="" />
      </div>
      <div className="text-left mt-2 pl-1">
        <h1 className="font-bold text-2xl uppercase">Title</h1>
        <p className=" py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum
          consequatur similique quas quaerat hic eum expedita! Dolore pariatur
          omnis temporibus aliquam, numquam dicta cum fugiat quos officiis
          quidem. Similique.
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
