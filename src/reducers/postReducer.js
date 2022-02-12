function postReducer (state = [], action) {
    switch(action.type) {
        case "CREATE_POST":
            return [
                ...state,
                action.payload
            ]
        case "UPDATE_POST":
            return state;
        case "DELETE_POST":
            return state;
        default: return state;
    }
}

export default postReducer;