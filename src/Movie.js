// This React component demonstrates the usage of props

import React from "react";
import styles from "./mystyle.module.css"

class Movie extends React.Component {
    render() {
        return (
            <div className={styles.bigblue}>
                <h1>{this.props.title}</h1>
                <h3>{this.props.genre}</h3>
            </div>
        )
    }
}

export default Movie;