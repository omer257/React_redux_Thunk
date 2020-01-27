import jsonMock from '../Api/jsonMock';
import _ from 'lodash';
export const fetchPosts = (params) => {
    return async (dispatch, getState) => {
        const response = await jsonMock.get('/posts');
        dispatch({ type: "FETCH_POSTS", payload: response.data })
    }
}; 

export const fetchUser = (params) => {
    return (dispatch) => {
        fetchUser_memoize(params,dispatch)
    }
}

const fetchUser_memoize = _.memoize(async (params,dispatch)=>{
    const response = await jsonMock.get("/users/" + params);
    dispatch({ type: "FETCH_USER", payload: response.data })
})