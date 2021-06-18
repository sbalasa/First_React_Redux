import {combineReducers} from "redux";
import usersReducer from "./reducers-users";
import activeUser from "./reducer-active-user";

const allReducers = combineReducers({
    users: usersReducer,
    activeUser: activeUser
});

export default allReducers;
