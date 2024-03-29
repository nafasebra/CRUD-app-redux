import React, { useState, useEffect } from "react";
import { UpdatePost } from "../../../actions/postAction";
import { CloseModal } from "../../../actions/modalAction";
import { useDispatch, useSelector } from "react-redux";

import "../../Theme.css";

const EditPost = ({ postId }) => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.postReducer);

  const [entryPostInfos, setEnteryPostInfos] = useState({
    id: 0,
    imageSrc: "",
    title: "",
    topics: [],
    description: "",
  });
  const [valueTheTopic, setValueTheTopic] = useState("");

  useEffect(() => {
    let infos = allData.filter((item) => item.id === postId);
    setEnteryPostInfos(infos[0]);
  }, [postId]);

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
    if (entryPostInfos.title !== "" && entryPostInfos.description !== "") {
      dispatch(UpdatePost(postId, entryPostInfos));
      setEnteryPostInfos({
        id: 0,
        imageSrc: "",
        title: "",
        topics: [],
        description: "",
      });
      dispatch(CloseModal());
    }
  };

  return (
    <>
      <div className="text_light">
        <input
          type="text"
          placeholder="Image URL"
          value={entryPostInfos.imageSrc}
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
                    {item}
                  </div>
                ))
              : null}
          </div>
        </div>

        <textarea
          placeholder="post description"
          className="form_input"
          value={entryPostInfos.description}
          rows="10"
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
          <span>Edit the post</span>
        </button>
      </div>
    </>
  );
};

export default EditPost;
