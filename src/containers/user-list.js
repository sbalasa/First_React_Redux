// This React component demonstrates the usage of containers in redux

import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import selectUser from "../actions"

class UserList extends React.Component {
    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first_name} {user.last_name}</li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

function mapStateToPros(state){
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToPros, matchDispatchToProps)(UserList) ;