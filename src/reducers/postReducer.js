import * as type from '../constants/constants'

function postReducer (state = [], action) {
    switch(action.type) {
        case type.CREATE_POST:
            return [
                ...state,
                action.payload
            ]
        case type.UPDATE_POST:
            return state;
        case type.DELETE_POST:
            return state;
        default: return state;
    }
}

export default postReducer;