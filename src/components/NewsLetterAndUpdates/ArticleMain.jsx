import Input from "../UI/Input";
import Button from "../UI/Button";
import ArticleContent from "./ArticleContent";
import img1 from "../../assets/user-img.png";
const ArticleMain = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="pb-2">
          <ArticleContent />
          <div className="flex gap-2 items-center flex-wrap text-sm">
            <p className="pt-1">Tag:</p>
            <Button className="">Bordoloi Trophy</Button>
            <Button className="">Copa America</Button>
            <Button className="">Football Legacy</Button>
            <Button className="">Sports Culture</Button>
          </div>
          <hr className="my-12 " />
          <div className="inline-flex">
            <img className="h-24" src={img1} alt="" />
            <div className="items-center mt-12 ml-4 text-xl font-bold hover:text-orange-300">
              PALASH MAHANTA
            </div>
          </div>
          <hr className="my-12 " />
        </div>
        <div className="ml-56">
          <div className="inline-flex">
            <Input className="px-8 py-2 mr-2 border-2" type="text" />
            <Button className="px-8 py-2 rounded  ">Search</Button>
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
    </section>
  );
};

export default ArticleMain;
