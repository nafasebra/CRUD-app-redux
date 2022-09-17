import * as type from "../constants/constants";

export function setOpenPopup(title) {
  return {
    type: type.SET_SHOW_POPUP,
    title,
  };
}

export function setClosePopup() {
  return {
    type: type.SET_HIDE_POPUP,
  };
}
