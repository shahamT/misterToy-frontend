import { toyService } from "../../services/toy.service.js"

//* Toys
export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'

export const SET_TOYS_FILTER_BY = 'SET_TOYS_FILTER_BY'
export const SET_TOYS_IS_LOADING = 'SET_TOYS_IS_LOADING'
export const SET_TOY_ACTION_IS_LOADING = 'SET_TOY_ACTION_IS_LOADING'

const initialState = {
    toys: [],
    filterBy: toyService.getDefaultFilter(),
    isToyLoading: false,
    isToyActionLoading: false,
}

export function toyReducer(state = initialState, action = {}) {
    switch (action.type) {
        //* Toys
        case SET_TOYS:
            return { ...state, toys: action.toys }

        case REMOVE_TOY:
            const lastToys = [...state.toys]
            return {
                ...state,
                toys: state.toys.filter(toy => toy._id !== action.toyId),
                lastToys
            }

        case ADD_TOY:
            return {
                ...state,
                toys: [...state.toys, action.toy]
            }

        case UPDATE_TOY:
            return {
                ...state,
                toys: state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            }

        case SET_TOYS_FILTER_BY:
            return {
                ...state,
                filterBy: { ...state.filterBy, ...action.filterBy }
            }

        case SET_TOYS_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_TOY_ACTION_IS_LOADING:
            return {
                ...state,
                isToyActionLoading: action.isLoading
            }

        default: return state
    }
}