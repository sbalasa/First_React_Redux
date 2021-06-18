// This Redux demonstrates the usage of actions

const selectUsers = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
}

export default selectUsers;