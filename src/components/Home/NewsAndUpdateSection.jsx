import NewsCard from "../UI/Cards/NewsCard";

const NewsAndUpdateSection = () => {
  return (
    <section className="mb-24">
      <div className=" mb-10">
        <div className=" text-[40px] text-center pb-8 font-bold ">
          Updates and News Letters
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from(Array(3)).map((_, index) => (
            <NewsCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdateSection;
