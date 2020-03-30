import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composer = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, composer);

sagaMiddleware.run(rootSaga);

export default store;
