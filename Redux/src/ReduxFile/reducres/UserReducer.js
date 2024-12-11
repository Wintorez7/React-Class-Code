const initialState = {
    name: "Rohan",
    age: 21
};

function userReducer(state = initialState, action) {
    switch(action.type) {
        case "increment":
            return {
                ...state,
                name: "Roshan"
            };
        case "decrement":
            return {
                ...state,
                name: "Mahesh"
            };
        default:
            return state;
    }
}

export default userReducer;
