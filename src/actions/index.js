// This Redux demonstrates the usage of actions

const selectUsers = (user) => {
    console.log("You clicked on " + user.first_name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}

export default selectUsers;