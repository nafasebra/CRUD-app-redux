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
            return DeletePost(action.id, state);
        default: return state;
    }
}

function UpdatePost (id, infos, state) {
    if(infos === null){
        return state
    } else {
        const currentIndex = state?.findIndex(item => item.id === id);
        return [
            ...state.map((item, index) => {
                if(index === currentIndex) {
                    return {...infos}
                }
                return item
            })
        ]
    }
}

function DeletePost (id, state) {
    const filterPostById = state.filter(post => post.id !== id);
    return[
        ...filterPostById
    ]
}

export default postReducer;