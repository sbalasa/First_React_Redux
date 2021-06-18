// This React component demonstrates the usage of states and refs

import React from "react";
import styles from "./mystyle.module.css"

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {editing: false}
    }
    edit = () => {
        this.setState({editing: true});
    }
    save = () => {
        console.log(this.props.children)
        console.log(this.refs.newText.value);
        this.setState({editing: false});
    }
    remove() {
        console.log("Removing the text");
    }
    render_normal() {
        return (
            <div className={styles.bigblue}>
                <h3>{this.props.children}</h3>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.remove}>Remove</button>
            </div>
        )
    }
    render_form() {
        return (
            <div className={styles.bigblue}>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <br/>
                <button onClick={this.save}>Save</button>
            </div>
        )
    }
    render() {
        if (this.state.editing)
            return this.render_form()
        return this.render_normal()
    }
}

export default Comment;