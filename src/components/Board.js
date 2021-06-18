// This React component demonstrates the usage of Multiple Child Components

import React from "react";
import styles from "./mystyle.module.css"
import Comment from "./Comment"

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments: [
                "This is my First Child Comment",
                "This is my Second Child Comment",
                "This is my Third Child Comment"
            ]
        }
    }
    render() {
        return (
            <div className={styles.bigblue}>
                {
                    this.state.comments.map(function(item, i) {
                        return <Comment key={i}>{item}</Comment>
                    })
                }
            </div>
        )
    }
}

export default Board;
