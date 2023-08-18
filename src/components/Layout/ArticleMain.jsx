import Input from "../UI/Input";
import Button from "../UI/Button";
import ArticleContent from "./ArticleContent";
import LeaveAReply from "../Layout/LeaveAReply";
import img1 from "../../assets/user-img.png";
const ArticleMain = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="pb-2">
          <ArticleContent />
          <div className="inline-flex">
            <p className="pt-1">Tag:</p>
            <Button className="px-2 py-2 mr-1 text-sm border-2 rounded hover:bg-orange-400">
              BordoloiTrophy
            </Button>
            <Button className="px-2 py-2 mr-1 text-sm border-2 rounded hover:bg-orange-400">
              CopaAmerica
            </Button>
            <Button className="px-2 py-2 mr-1 text-sm border-2 rounded hover:bg-orange-400">
              FootballLegacy
            </Button>
            <Button className="px-2 py-2 mr-1 text-sm border-2 rounded hover:bg-orange-400">
              NorthEastIndia
            </Button>
            <Button className="px-2 py-2 mr-1 text-sm border-2 rounded hover:bg-orange-400">
              NorthEastIndia
            </Button>
            <Button className="px-2 py-2 mr-1 text-sm border-2 rounded hover:bg-orange-400">
              SportsCulture
            </Button>
          </div>
          <hr className="my-12 " />
          <div className="inline-flex">
            <img className="h-24" src={img1} alt="" />
            <div className="items-center mt-12 ml-4 text-xl font-bold hover:text-orange-300">
              PALASH MAHANTA
            </div>
          </div>
          <hr className="my-12 " />
          <LeaveAReply />
        </div>
        <div className="ml-56">
          <div className="inline-flex">
            <Input className="px-8 py-2 mr-2 border-2" type="text" />
            <Button className="px-8 py-2 border-2 hover:bg-orange-400">
              Search
            </Button>
          </div>
          <hr className="my-12 " />
          <div>
            <p className="text-4xl font-bold ">Recent Posts</p>
            <a className="pb-3 hover:text-orange-300" href="/">
              <br />
              Bordoloi Trophy: The Forgotten Copa America of North East India
            </a>
            <a className="pb-3 hover:text-orange-300" href="/">
              <br />
              Bordoloi Trophy: The Forgotten Copa America of North East India
            </a>
            <a className="pb-3 hover:text-orange-300" href="/">
              <br />
              Bordoloi Trophy: The Forgotten Copa America of North East India
            </a>
            <a className="pb-3 hover:text-orange-300" href="/">
              <br />
              Bordoloi Trophy: The Forgotten Copa America of North East India
            </a>
          </div>
          <hr className="my-12 " />
          <div>
            <p className="text-4xl font-bold">Recent Comments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleMain;
