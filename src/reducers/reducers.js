// Carousel Reducer
import { FETCH_CAROUSEL, FETCH_ASUSEDBY, FETCH_NEEDWORKDONE, FETCH_ABOUTIT, FETCH_FAVORITE, FETCH_CATEGORIES, FETCH_APICARD, FETCH_JOB } from '../actions/actions';

export default function asUsedBy (state = {
        carousel: [],
        asUsedBy: [],
        needWorkDone: [],
        greatAboutIt: [],
        favorite: [],
        categories: [],
        apiCard: [],
        jobCategories: [],
    }
    , action) {
    switch(action.type){
        case FETCH_CAROUSEL:
            return { ...state, carousel: action.payload };
        case FETCH_ASUSEDBY:
            return{ ...state, asUsedBy: action.payload };
        case FETCH_NEEDWORKDONE:
            return{ ...state, needWorkDone: action.payload };
        case FETCH_ABOUTIT:
            return{ ...state, greatAboutIt: action.payload };
        case FETCH_FAVORITE:
            return{ ...state, favorite: action.payload };
        case FETCH_CATEGORIES:
            return{ ...state, categories: action.payload };
        case FETCH_APICARD:
            return{ ...state, apiCard: action.payload };
        case FETCH_JOB:
            return{ ...state, jobCategories: action.payload };
        default:
            return state;
    }
}