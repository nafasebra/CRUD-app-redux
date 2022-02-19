const initialState = {
    isOpen: false,
    title: '',
    childOfModal: null
}

function modalReducer (state = initialState, action) {
    switch(action.type){
        case "SET_OPEN_MODAL" :
            return {
                isOpen: true,
                title: action.title,
                childOfModal: action.child
            }
        case "SET_CLOSE_MODAL":
            return {
                ...state,
                isOpen: false
            }
        default: 
            return state
    }
}

export default modalReducer;