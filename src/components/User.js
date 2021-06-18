// This React component demonstrates the usage of providers in redux

import React from "react";
import styles from "./mystyle.module.css"

class User extends React.Component {
    render() {
        return (
            <div className={styles.bigblue}>
                <h2>Username List:</h2>
                <hr />
                <h2>User Details:</h2>
            </div>
        )
    }
}

export default User;
