import { createElement } from "react"

const initialState = {
    isOpen: false,
    hasTitle: true,
    textOfTitle: '',
    childOfModal: createElement(null)
}

function modalReducer (state = initialState, action) {
    switch(action.type){
        case "SET_OPEN_MODAL" :
            return {
                isOpen: true,
                hasTitle: action.title.hasTitle,
                textOfTitle: action.title.textOfTitle,
                childOfModal: action.child
            }
        case "SET_CLOSE_MODAL":
            return {
                ...state,
                isOpen: false
            }
        default : return state
    }
}

export default modalReducer;