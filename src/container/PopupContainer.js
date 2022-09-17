import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setClosePopup } from "../actions/PopupAction";
import Popup from "../components/Popup";

function PopupContainer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.popupReducer);

  const ClosePopup = () => {
    dispatch(setClosePopup());
  }

  useEffect(() => {
    setTimeout(() => {
      ClosePopup();
    }, 3500);
  }, []);

  return <>{<Popup show={data.show} setClose={ClosePopup} text={data.title} />}</>;
}

export default PopupContainer;
