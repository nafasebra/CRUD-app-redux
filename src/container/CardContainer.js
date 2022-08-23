import Card from "../components/card/Card";
import "../components/card/Card.css";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const data = useSelector((state) => state.postReducer);

  return (
    <div className="container">
      <h3 className="head_text">Added Posts...</h3>
      <div className="card_section">
        {data.map((item) => (
          <Card
            key={item.id}
            id = {item.id}
            imgSrc={item.imageSrc}
            title={item.title}
            desc={item.description}
            topics={item.topics}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
