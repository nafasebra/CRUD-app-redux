import * as type from './../constants/constants';

export function CreatePost(infos) {
    return {
        type: type.CREATE_POST,
        infos
    }
}

export function UpdatePost(id) {
    return{
        type: type.UPDATE_POST,
        id
    }
}

export function DeletePost(id) {
    return{
        type: type.DELETE_POST,
        id
    }
}