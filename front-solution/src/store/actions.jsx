import * as AcionTypes from './actionTypes';
import RandomApi from '../api/randomApi';

export const fetchToDoList = (toDoList, responseError, responseResult) => {
    return {
        type: AcionTypes.ADD_ITEM_TO_LIST,
        toDoList,
        responseError, 
        responseResult
    }
}

export const fetchToDoListRequest = () => {
    return dispatch => {
        RandomApi.get('/posts').then(response => {
            dispatch(fetchToDoList(response.data, "", true));
        }).catch(error => {
            dispatch(fetchToDoList([], error.response.status, false));
        })
    }
}