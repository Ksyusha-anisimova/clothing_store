import {createStore} from "redux";


const initialState = {isOpen: false}


const reducer = (state=initialState, action)=>{
    switch (action.type){
        case "TOGGLE_MENU":
            return {...state, isOpen: !state.isOpen }
        case "CLOSE_MENU":
            return {...state, isOpen: false}
        default:
            return state;
    }
}
export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>