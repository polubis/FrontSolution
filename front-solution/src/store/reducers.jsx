import * as actionsTypes from './actionTypes';
import { updateObject } from './storeHelperMethods/storeHelperMethods'; 


export const initialState = {
    toDoList: [],
    responseError: "",
    responseResult: null
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.ADD_ITEM_TO_LIST:
            return updateObject(state, { 
                toDoList: action.toDoList, 
                responseError: action.responseError, 
                responseResult: action.responseResult
        })
        default:
            break;
     
    }
    return state;   
}
export default reducer;