import {createStore} from 'redux';
import {Reducer} from './reducers/reducers';

export const mystore = createStore(Reducer);
