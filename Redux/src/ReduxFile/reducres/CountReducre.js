
const initialValue = 0

function countReducer(state = initialValue, action){
    switch(action.type){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;    
    }
}
export default countReducer