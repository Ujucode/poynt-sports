import img1 from "../../assets/new-updates1.png";
import classes from "../Layout/Layout.module.css";

const NewsCard = () => {
  return (
    <div className={`${classes['header-container']} bg-[#B0CEAF]  pl-20`}>
     <div><img className="py-4 h-60 w-80" src={img1} alt="" /></div>
    <div className="text-[32px] font-medium leading-9">
    Lorem ipsum dolor sit amet consectetur. Turpis consectetur.
    </div>
    <div className="text-[25px] font-normal leading-9 pt-4 pb-12">
    Lorem ipsum dolor sit amet consectetur. Turpis consectetur. </div>
    <div className="pb-12 text-[25px] font-medium"> <a className="text-[#50AD29]" href="">Read full article</a> </div>
    </div>
    
  )
}

export default NewsCard;