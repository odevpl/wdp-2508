import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import viewportReducer from './viewportRedux';
import quickViewReducer from './quickViewRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  viewport: viewportReducer,
  quickView: quickViewReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
