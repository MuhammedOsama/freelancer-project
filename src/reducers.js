import { combineReducers } from 'redux';
import {FETCH_DATA} from "./actions";

const dataReducer = (state = {}, action) => {
    console.log(action);
    
    switch(action.type) {
        case FETCH_DATA:
            return { ...state }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;