import * as type from '../constants/constants'
import posts from '../data/posts';

const initialState = posts;

function postReducer (state = initialState, action) {
    switch(action.type) {
        case type.CREATE_POST:
            return [
                ...state,
                action.infos
            ]
        case type.UPDATE_POST:
            return UpdatePost(action.id, action.infos, state);
        case type.DELETE_POST:
            return deletePost(action.id, state);
        default: return state;
    }
}

function UpdatePost (id, infos, state) {
    if(infos === null){
        return state
    } else {
        return [
            ...state,
            {[id]: infos}
        ]
    }
}

function deletePost (id, state) {
    const filterPostById = state.filter(post => post.id !== id);
    return{
        ...filterPostById
    }
}

export default postReducer;