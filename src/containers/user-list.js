// This React component demonstrates the usage of containers in redux

import React from "react";
import {BindActionsCreators} from "redux";
import {connect} from "react-redux";

class UserList extends React.Component {
    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>{user.first_name} {user.last_name}</li>
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

export default connect(mapStateToPros)(UserList) ;