import * as type from '../constants/constants';

export function OpenModal(title, child) {
    return{
        type: type.SET_OPEN_MODAL,
        title,
        child
    }
}

export function CloseModal() {
    return{
        type: type.SET_CLOSE_MODAL
    }
}