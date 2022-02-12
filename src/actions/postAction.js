const CREATE_POST = "CREATE_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

export function CreatePost(infos) {
    return {
        type: CREATE_POST,
        payload: infos
    }
}

export function UpdatePost(id) {
    return{
        type: UPDATE_POST,
        id
    }
}

export function DeletePost(id) {
    return{
        type: DELETE_POST,
        id
    }
}