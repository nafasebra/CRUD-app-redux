import React from "react";
import { useDispatch } from "react-redux";
import { OpenModal } from "../../actions/modalAction";
import DeletePost from "../modal/child/DeletePost";
import {Link} from "react-router-dom"

import "../Theme.css";
import "./Card.css";


const Card = (props) => {
  const dispatch = useDispatch();
  const { id, title, imgSrc, desc, topics } = props;

  const DeletingPost = () => {
    dispatch(OpenModal("Deleting post", <DeletePost postId={id} />));
  };

  return (
    <div className="card_item">
      <div className="card">
        <div className="card_header">
          <div className="card_icons">
            {/* the edit button */}
            <button className="btn_icon">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            {/* the delete post button */}
            <button className="btn_icon" onClick={DeletingPost}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
          <div className="card_img">
            <img src={imgSrc} alt="first-of-post" />
          </div>
        </div>
        <div className="card_body">
          <h3 className="card_title">
            <Link to={`post/${id}`}>{title}</Link>
          </h3>
          <p className="card_desc">{desc}</p>
          <div className="card_topics">
            {topics.map((item, index) => (
              <div key={index} className="card_topic">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
