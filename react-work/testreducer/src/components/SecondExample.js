import { useReducer } from "react";

const initialeState = 500;
const reducer = (state, action) => {
    if (action.type == "increment")
        return state + 1;
    else if (action.type == 'decrement')
        return state - 1;
    else if (action.type == 'incrementByTen')
        return state + 10;
    else if (action.type == 'decrementByTen')
        return state - 10;
    else if (action.type == 'reset')
        return initialeState;
    else
        return state;
}
export const SecondExample = () => {
    const [counter, dispatch] = useReducer(reducer, initialeState);
    return <>
        <center>
            <p>{counter}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'incrementByTen' })}>Increment By 10</button>
            <button onClick={() => dispatch({ type: 'decrementByTen' })}>Decrement By 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </center>
    </>
}