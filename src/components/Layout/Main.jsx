import classes from "./Layout.module.css";
import NewsCard from "../UI/NewsCard";
import Button from "../UI/Button";
import img1 from "../../assets/new-updates1.png";
import img2 from "../../assets/news-updates2.png";
import img3 from "../../assets/news-updates3.png";
import Input from "../UI/Input";

const Main = () => {
  let cards = [
    {
      key: "Lorem ipsum dolor sit amet consectetur. Turpis consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Turpis consectetur.",
      img: img1,
    },
    {
      key: "Lorem ipsum dolor sit amet consectetur. Turpis consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Turpis consectetur.",
      img: img2,
    },
    {
      key: "Lorem ipsum dolor sit amet consectetur. Turpis consectetur.",
      text: "Lorem ipsum dolor sit amet consectetur. Turpis consectetur.",
      img: img3,
    },
  ];
  return (
    <main>
      <section className={`bg-gray-300 `}>
        <div className={`${classes["header-container"]}`}>
          <h1>Main goes here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            deleniti! Nam rerum ad itaque dicta eius, quasi impedit, a mollitia
            tenetur odit nulla! Non natus sunt numquam at tempora recusandae!
            Vitae blanditiis doloribus vel quisquam veritatis suscipit quia
            deleniti sunt eius dolor, assumenda eaque nam quas, velit alias
            cupiditate id eveniet harum hic a! Sit sed voluptatem officia
            laudantium amet! Nemo, dignissimos velit expedita voluptate dolorum
            ipsam aspernatur vero? Consectetur, vitae voluptatem amet quod iure
            porro cupiditate ducimus sequi quae excepturi hic culpa, rem atque
            inventore odit eum similique sunt! Molestiae minima sapiente facilis
            harum perspiciatis molestias amet eaque cupiditate laboriosam? Saepe
            sequi provident ut commodi aperiam! Ab nesciunt illo ad porro,
            animi, id, dolorum exercitationem doloribus dolore itaque tempore!
            Ab, aut nesciunt praesentium magnam aspernatur aperiam? Ducimus
            debitis praesentium aut ut minus numquam. Odio architecto, id
            praesentium itaque magnam ut dolore, repudiandae quia expedita
            nesciunt maiores officia asperiores saepe! Numquam autem perferendis
            quae, sunt, earum et assumenda ducimus, fugiat consequatur totam eum
            obcaecati magni veniam? Ullam, aspernatur totam odio libero, nam, ea
            ipsam quibusdam non eveniet ducimus molestias unde? At corporis amet
            itaque recusandae error accusantium ducimus labore libero,
            voluptatum ea ullam debitis. Delectus harum quis dicta quisquam odit
            inventore molestias recusandae deleniti consectetur voluptas
            assumenda, iure nemo odio. Autem error explicabo accusantium labore
            aliquid dolorum harum perspiciatis nesciunt tenetur eligendi alias
            cum deleniti, ut minima facere deserunt. Ab et voluptatum odit?
            Facere libero exercitationem voluptas ab. Facilis, reiciendis?
            Molestias quod ea esse quasi iste, libero enim magnam, debitis
            repudiandae aspernatur excepturi sed at magni quas sequi, eaque
            rerum ad deserunt accusantium dolorum. Ipsum ipsam nemo earum
            repellendus ducimus! Nostrum explicabo amet, at odio repellat magni
            animi eum sapiente, officia, accusantium quod quisquam iusto ex.
            Mollitia exercitationem nulla a officiis quod quibusdam, esse sit
            atque asperiores architecto doloribus iure.
          </p>
        </div>
      </section>
      <div className="bg-[#B0CEAF]">
        <div className=" text-[40px] text-center py-12 font-bold">
          Updates and News Letters
        </div>
        <div className="flex px-36 row basis-1/3">
          {cards.map((item) => (
            <NewsCard key={item.key} data={item} />
          ))}
        </div>
      </div>
      <Input type="text" />
    </main>
  );
};

export default Main;
