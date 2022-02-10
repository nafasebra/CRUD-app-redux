const SET_OPEN_MODAL = "SET_OPEN_MODAL";
const SET_CLOSE_MODAL = "SET_CLOSE_MODAL";


export function OpenModal(status) {
    return{
        type: SET_OPEN_MODAL,
        status
    }
}

export function CloseModal(status) {
    return{
        type: SET_CLOSE_MODAL,
        status
    }
}