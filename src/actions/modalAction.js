const SET_OPEN_MODAL = "SET_OPEN_MODAL";
const SET_CLOSE_MODAL = "SET_CLOSE_MODAL";


export function OpenModal(title, child) {
    return{
        type: SET_OPEN_MODAL,
        title,
        child
    }
}

export function CloseModal() {
    return{
        type: SET_CLOSE_MODAL
    }
}