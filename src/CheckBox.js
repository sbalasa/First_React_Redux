// This React component demonstrates the usage of Event handling

import React from "react";
import styles from "./mystyle.module.css"

class CheckBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {checked: false}
    }
    handleChange = () => {
        this.setState({checked: !this.state.checked})
    }
    render() {
        var msg ;
        if (this.state.checked)
            msg = "Checked";
        else
            msg = "UnChecked";
        return (
            <div className={styles.bigblue}>
                <input type="checkbox" onChange={this.handleChange} defaultChecked={this.state.checked}/>
                <h3>Checkbox is {msg}</h3>
            </div>
        )
    }
}

export default CheckBox;