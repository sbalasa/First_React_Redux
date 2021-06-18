import {combineReducers} from "redux";
import usersReducer from "./reducers-users";

const allReducers = combineReducers({
    users: usersReducer
});

export default allReducers;
