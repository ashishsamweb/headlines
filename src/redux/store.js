import {createStore , applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";


import rootreducer from './root-reducer';

const middleware = [thunk];

if(process.env === "development"){
   middleware.push(logger)
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

// STORE -> GLOBALIZED STATE
const store = createStoreWithMiddleware(rootreducer, composeEnhancers());

store.subscribe(() => {});

//const store = createStore(rootreducer, applyMiddleware(...middleware));

export default store;