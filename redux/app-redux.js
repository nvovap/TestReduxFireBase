import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';



//
// Initial State...
//
const initialState = {
    personData: { },
}


//
// Reducer...
//
const reducer = (state = initialState, action) => {
    return state;
}


//
// Store...
//
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };