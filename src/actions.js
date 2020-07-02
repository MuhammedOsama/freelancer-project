import apiReq from "./API/api";

// Action Type
export const FETCH_DATA = "FETCH_DATA";


export const fetchAsUsedBy = () => async dispatch => {
    const response = await apiReq.get(`/asUsedBy`);
    console.log(response.data);
	dispatch({ type: FETCH_DATA, payload: response.data });
}