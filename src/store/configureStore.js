import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import accountReducer from "../reducers/accountReducer";
import usersReducer from "../reducers/usersReducer";
import customersReducer from '../reducers/customersReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      regUser: usersReducer,
      account: accountReducer,
      customer : customersReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;