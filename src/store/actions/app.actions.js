import { store } from "../store.js"
import { CLOSE_GLOBAL_MODAL, OPEN_GLOBAL_MODAL, SET_GLOBAL_MODAL_CLOSING } from "../reducers/app.reducer.js"



// === Handle Global Modal ===
export function openGlobalModal(content) {
  store.dispatch({ type: OPEN_GLOBAL_MODAL, content })
}

export function closeGlobalModal() {
  store.dispatch({ type: SET_GLOBAL_MODAL_CLOSING, isClosing: true })
  setTimeout(() => {
    store.dispatch({ type: CLOSE_GLOBAL_MODAL })
    store.dispatch({ type: SET_GLOBAL_MODAL_CLOSING, isClosing: false })
  }, 150)
}