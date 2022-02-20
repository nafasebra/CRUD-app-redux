import * as type from '../constants/constants';

export function CreatePost(infos) {
    return {
        type: type.CREATE_POST,
        infos
    }
}

export function UpdatePost(id, infos) {
    return{
        type: type.UPDATE_POST,
        id,
        infos
    }
}

export function DeletePost(id) {
    return{
        type: type.DELETE_POST,
        id
    }
}