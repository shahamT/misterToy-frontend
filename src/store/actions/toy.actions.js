import { toyService } from "../../services/toy.service.js";
import { ADD_TOY, REMOVE_TOY, SET_TOY_ACTION_IS_LOADING, SET_TOYS, SET_TOYS_FILTER_BY, SET_TOYS_IS_LOADING, UPDATE_TOY } from "../reducers/toy.reducer.js";
import { store } from "../store.js";

// ==== Load ====
export function loadToys() {
    const filterBy = store.getState().toyModule.filterBy
    store.dispatch({ type: SET_TOYS_IS_LOADING, isLoading: true })
    return toyService.query(filterBy)
        .then(toys => {
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            console.log('toy action -> Cannot load toys', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_TOYS_IS_LOADING, isLoading: false })
        })
}

// ==== Remove ====
export function removeToy(toy) {
    store.dispatch({ type: SET_TOY_ACTION_IS_LOADING, isLoading: true })
    store.dispatch({ type: REMOVE_TOY, toyId: toy._id })
    return toyService.remove(toy._id)
        .then(() => {
            showSuccessMsg('toy succesfully deleted')
        })
        .catch(err => {
            console.log('toy action -> Cannot remove toy', err)
            showErrorMsg('toy could not be deleted')
            store.dispatch({ type: ADD_TOY, toy })
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_TOY_ACTION_IS_LOADING, isLoading: false })
        })
}

// ==== Save ====
export function saveToy(toy) {
    const type = toy._id ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy)
        .then(savedToy => {
            store.dispatch({ type, toy: savedToy })
            return savedToy
        })
        .catch(err => {
            console.log('toy action -> Cannot save toy', err)
            throw err
        })
}

// ==== Set FilterBy ====
export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_TOYS_FILTER_BY, filterBy })
}