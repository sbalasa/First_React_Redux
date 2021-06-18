// This Redux demonstrates the usage of listening actions 

function activeUser(state={}, action){
    switch(action.type){
        case "USER_SELECTED": 
            return action.payload;
        default:
            return state;
    }
}

export default activeUser ;
