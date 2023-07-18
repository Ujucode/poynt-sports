import classes from "../Layout/Layout.module.css";
import arrow from "../../assets/arrow.png";
const NewsCard = ({ data }) => {
  return (
    <div className={`${classes["header-container"]} bg-[#B0CEAF] pr-12 `}>
      <div>
        <img className="w-full py-4 h-60" src={data.img} alt="" />
      </div>
      <div className="text-[32px] font-medium leading-9">{data.key}</div>
      <div className="text-[25px] font-normal leading-9 pt-4 pb-12">
        {data.text}
      </div>
      <div className="pb-12 text-[25px] font-medium ">
        <a className="text-[#50AD29]" href="">
          Read full article
          <img className="inline pl-4" src={arrow} alt="" />
        </a>{" "}
      </div>
    </div>
  );
};

export default NewsCard;
