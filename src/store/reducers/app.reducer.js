
//Global Modal
export const OPEN_GLOBAL_MODAL = "OPEN_GLOBAL_MODAL"
export const CLOSE_GLOBAL_MODAL = "CLOSE_GLOBAL_MODAL"
export const SET_GLOBAL_MODAL_CLOSING = "SET_GLOBAL_MODAL_CLOSING" // allowing modal trnasition out

const initialState = {

    //Global Modal
    isModalOpen: false,
    isModalClosing: false,
    modalContent: null,
    flashMsg: { type: 'sucsess', msg: null }
}

export function appReducer(state = initialState, action = {}) {
    switch (action.type) {

        //Global Modal
        case 'OPEN_GLOBAL_MODAL':
            return {
                ...state,
                isModalOpen: true, modalContent: action.content
            }
        case 'SET_GLOBAL_MODAL_CLOSING':
            return {
                ...state,
                isModalClosing: action.isClosing,
            }
        case 'CLOSE_GLOBAL_MODAL':
            return {
                ...state,
                isModalOpen: false, modalContent: null
            }

        default: return state;
    }
}