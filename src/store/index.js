import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './reducers/userReducer';
import logger from 'redux-logger';

// Configure persisted store with localstorage property name
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}
//Abduqahhordan salom

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);

export { store as default, persistor }
