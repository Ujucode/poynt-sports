import NewsCard from "../UI/Cards/NewsCard";

const NewsAndUpdateSection = () => {
  return (
    <section className="my-16">
      <div className=" mb-1">
        <div className=" text-[40px] text-center py-12 font-bold ">
          Updates and News Letters
        </div>
        <div className="grid grid-cols-3 gap-6">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdateSection;
