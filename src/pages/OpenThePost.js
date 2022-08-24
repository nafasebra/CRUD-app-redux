import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "../components/card/Card.css";


function OpenThePost() {
  const {id} = useParams();
  const data = useSelector((state) => state.postReducer);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    setSelectedData(data.filter(item => item.id === id));
  }, []);

  return (
    <>
      <Navbar showPlusBtn={false} />
      <div className="blog_page">
        <h1> {selectedData[0]?.title} </h1>
        <img src={selectedData[0]?.imageSrc} alt="the Lorem ipsum dolor sit amet" />
        <p>{selectedData[0]?.description}</p>

        <div className="card_topic">nature</div>
        <div className="card_topic">photo</div>
      </div>
      <Footer />
    </>
  );
}

export default OpenThePost;
