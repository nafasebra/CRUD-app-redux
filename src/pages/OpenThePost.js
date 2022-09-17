import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "../components/card/Card.css";
import "./Pages.css";

function OpenThePost() {
  const { id } = useParams();
  const data = useSelector((state) => state.postReducer);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    setSelectedData(data.filter((item) => item.id == id));
  }, []);

  return (
    <>
      <Navbar showPlusBtn={false} />
      <div className="blog_page">
        <h1> {selectedData[0]?.title} </h1>

        {selectedData[0]?.imageSrc !== "" ? (
          <img
            src={selectedData[0]?.imageSrc}
            alt="the Lorem ipsum dolor sit amet"
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "7rem 0",
              borderRadius: "20px",
              color: "#ffffff",
              backgroundColor: "#bbbbbb",
              opacity: 0.3,
            }}
          >
            <svg
              style={{ width: "50px" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <p>{selectedData[0]?.description}</p>

        <div className="card_topics">
          {
            selectedData[0]?.topics.map((item, index) => (
              <div className="card_topic" key={index}>{item}</div>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OpenThePost;
