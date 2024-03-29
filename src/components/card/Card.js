import React from "react";
import { useDispatch } from "react-redux";
import { OpenModal } from "../../actions/modalAction";
import DeletePost from "../modal/child/DeletePost";
import { Link } from "react-router-dom";

import "../Theme.css";
import "./Card.css";
import EditPost from "../modal/child/EditPost";

const Card = (props) => {
  const dispatch = useDispatch();
  const { id, title, imgSrc, desc, topics } = props;

  const DeletingPost = () => {
    dispatch(OpenModal("Deleting post", <DeletePost postId={id} />));
  };

  const EditingPost = () => {
    dispatch(OpenModal("Editing the post", <EditPost postId={id} />));
  };

  return (
    <div className="card_item">
      <div className="card">
        <div className="card_header">
          <div className="card_icons">
            {/* the edit button */}
            <button className="btn_icon" onClick={EditingPost}>
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
            {imgSrc !== "" ? (
              <img src={imgSrc} alt="first-of-post" />
            ) : (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                color: '#cdcdcd',
                opacity: 0.3,
              }}>
                <svg
                  style={{width: '50px'}}
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
          </div>
        </div>
        <div className="card_body">
          <h3 className="card_title">
            <Link to={`post/${id}`}>{title}</Link>
          </h3>
          <p className="card_desc">{desc.substr(0, 56) + "..."}</p>
          <div className="card_topics">
            {topics?.map((item, index) => (
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
