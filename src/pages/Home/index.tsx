import Card from "~/components/Card";
import "~/pages/Home/styles.sass";
import useModel from "~/hooks/useModel";
import { Carousel } from "~/components/Carousel";

const Home = () => {
  const { selectModel } = useModel();
  const limite = selectModel("sport")?.slice(0, 12);
  console.log(limite);

  const CarsSell = limite?.map((car, index) => {
    const isFourthItem = (index + 1) % 4 === 0;
    const itemComponent = (
      <div key={car?.id}>
        <Card car={car} />
      </div>
    );
    return itemComponent;
  });
  return (
    <div className="home">
      <div className="home-filter">
        <span className="lambo">lambo</span>
      </div>
      <Carousel />
      <h2>Cars</h2>
      <div className="home-map">{CarsSell}</div>
    </div>
  );
};

export default Home;
