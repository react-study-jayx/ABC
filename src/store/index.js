import {createStore,applyMiddleware,compose} from 'redux'
import cretaeSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import reducer from './reducer'
const sagaMiddleware=cretaeSagaMiddleware();
const store = createStore(reducer, 
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga)
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;