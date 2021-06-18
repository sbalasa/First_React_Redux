// This React component demonstrates the usage of providers in redux

import React from "react";
import styles from "./mystyle.module.css";
import UserList from "../containers/user-list";

class User extends React.Component {
    render() {
        return (
            <div className={styles.bigblue}>
                <h2>Users List</h2>
                    <UserList />
                    <hr />
                <h2>User Details</h2>
            </div>
        )
    }
}

export default User;
