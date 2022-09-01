const redux = require("redux")

const createStore = redux.createStore
const CAKE_ORDERED = "CAKE_ORDERED";

// Action creator function

function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

// initial state
const initialState = {
    numberOfCakes : 10,
    numberOfCookies : 20
}

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch (action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)

console.log("initial state", store.getState())

const unsubscribe = store.subscribe(()=>console.log("Update state", store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()