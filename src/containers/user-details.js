import React from "react";
import {connect} from "react-redux";

class UserDetails extends React.Component {
    render() {
        if (!this.props.activeUser.first_name){
            return (<h4>Select a User...</h4>);
        }
        return (
            <div>
                <h2>{this.props.activeUser.first_name} {this.props.activeUser.last_name}</h2>
                <h3>Age: {this.props.activeUser.age}</h3>
                <h3>Description: {this.props.activeUser.description}</h3>
            </div>
        );
    }
}

function mapStateToPros(state){
    return {
        activeUser: state.activeUser
    }
}

export default connect(mapStateToPros)(UserDetails) ;