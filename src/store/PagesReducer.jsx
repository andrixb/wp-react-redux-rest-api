import { FETCH_PAGES } from '../actions/index'

const INITIAL_STATE = { all: [], page: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PAGES:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}
