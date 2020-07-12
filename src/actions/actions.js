import apiReq from "../API/api";

// Action Type
export const FETCH_CAROUSEL = "FETCH_CAROUSEL";
export const FETCH_ASUSEDBY = "FETCH_ASUSEDBY";
export const FETCH_NEEDWORKDONE = "FETCH_NEEDWORKDONE";
export const FETCH_ABOUTIT = "FETCH_ABOUTIT";
export const FETCH_FAVORITE = "FETCH_FAVORITE";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_APICARD = "FETCH_APICARD";
export const FETCH_JOB = "FETCH_JOB";

// Action Creator
export const fetchMainCarousel = () => async dispatch => {
    const response = await apiReq.get(`/mainCarousel`);
    console.log(response.data);
    dispatch({ type: FETCH_CAROUSEL, payload: response.data })
}

export const fetchAsUsedBy = () => async dispatch => {
    const response = await apiReq.get(`/asUsedBy`);
    console.log(response.data);
	dispatch({ type: FETCH_ASUSEDBY, payload: response.data });
}

export const fetchNeedWorkDone = () => async dispatch => {
    const response = await apiReq.get(`/needWorkDone`);
    console.log(response.data);
    dispatch({ type: FETCH_NEEDWORKDONE, payload: response.data })
}

export const fetchAboutIt = () => async dispatch => {
    const response = await apiReq.get(`/greatAboutIt`);
    console.log(response.data);
    dispatch({ type: FETCH_ABOUTIT, payload: response.data })
}

export const fetchFavorite = () => async dispatch => {
    const response = await apiReq.get(`/favorite`);
    console.log(response.data);
    dispatch({ type: FETCH_FAVORITE, payload: response.data })
}

export const fetchCategories = () => async dispatch => {
    const response = await apiReq.get(`/categories`);
    console.log(response.data);
    dispatch({ type: FETCH_CATEGORIES, payload: response.data })
}

export const fetchApiCard = () => async dispatch => {
    const response = await apiReq.get(`/apiCard`);
    console.log(response.data);
    dispatch({ type: FETCH_APICARD, payload: response.data })
}

export const fetchJobCategories = () => async dispatch => {
    const response = await apiReq.get(`/jobCategories`);
    console.log(response.data);
    dispatch({ type: FETCH_JOB, payload: response.data })
}