import  {combineReducers}  from 'redux';

import postReducer from './reducer';


const rootreducer = combineReducers({
    data: postReducer
})


export default rootreducer;