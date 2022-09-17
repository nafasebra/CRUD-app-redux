import React, { useState } from "react";
import { v4 as uuidu4 } from "uuid";
import { CreatePost } from "../../../actions/postAction";
import { CloseModal } from "../../../actions/modalAction";
import { useDispatch } from "react-redux";

import "../../Theme.css";

const Addpost = () => {
  const dispatch = useDispatch();

  const [entryPostInfos, setEnteryPostInfos] = useState({
    id: 0,
    imageSrc: "",
    title: "",
    topics: [],
    description: "",
  });
  const [valueTheTopic, setValueTheTopic] = useState("");

  const AddTopicTabHandler = (e) => {
    if (e.key === "Tab") {
      setEnteryPostInfos({
        ...entryPostInfos,
        topics: [...entryPostInfos.topics, valueTheTopic],
      });
      setValueTheTopic("");
      e.preventDefault();
    }
  };

  const submitForm = () => {
    setEnteryPostInfos((prev) => {
      return {
        ...prev,
        id: uuidu4(),
      };
    });
    dispatch(CreatePost(entryPostInfos));
    setEnteryPostInfos({
      id: 0,
      imageSrc: "",
      title: "",
      topics: [],
      description: "",
    });
    dispatch(CloseModal());
  };

  const RemoveFromTopics = (id) => {
    setEnteryPostInfos({
      ...entryPostInfos,
      topics: entryPostInfos.topics.filter((item, index) => index !== id),
    });
  };

  return (
    <div className="text_light">
      <input
        type="text"
        placeholder="Image URL"
        value={entryPostInfos.imageURL}
        onChange={(e) => {
          setEnteryPostInfos((prev) => {
            return {
              ...prev,
              imageSrc: e.target.value,
            };
          });
        }}
        className="form_input"
      />

      <input
        type="text"
        placeholder="post title"
        value={entryPostInfos.title}
        onChange={(e) => {
          setEnteryPostInfos((prev) => {
            return {
              ...prev,
              title: e.target.value,
            };
          });
        }}
        className="form_input"
      />

      <div style={{ padding: "1rem 0" }}>
        <p>Type a tag and press TAB</p>
        <input
          type="text"
          className="form_input"
          value={valueTheTopic}
          onChange={(e) => setValueTheTopic(e.target.value)}
          onKeyDown={(e) => AddTopicTabHandler(e)}
        />
        <div className="card_topics">
          {entryPostInfos.topics.length
            ? entryPostInfos.topics.map((item, index) => (
                <div key={index} className="card_topic">
                  <span>{item}</span>
                  <button
                    onClick={() => RemoveFromTopics(index)}
                    className="card_topic__remove"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))
            : null}
        </div>
      </div>

      <textarea
        placeholder="post description"
        className="form_input"
        rows="10"
        value={entryPostInfos.description}
        onChange={(e) => {
          setEnteryPostInfos((prev) => {
            return {
              ...prev,
              description: e.target.value,
            };
          });
        }}
      >
        {entryPostInfos.description}
      </textarea>

      <button className="btn_blue" onClick={() => submitForm()}>
        <span>Create post</span>
      </button>
    </div>
  );
};

export default Addpost;
