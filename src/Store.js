import { createStore } from "redux";

/*
{
    currentInput: 12345,
    stack: [10,20]
}
*/
function reducer(store, action) {
  if (!store) {
    return {
      currentInput: 0,
      stack: []
    };
  }
  if (action.type === "pushToStack") {
    // take the currentInput and push it onto the stack
    return {
      currentInput: 0,
      stack: [...store.stack, store.currentInput]
    };
  }

  if (action.type === "add") {
    // take the top 2 things on the stack, add them, then push the
    //answer back onto the stack
    const answer =
      store.stack[store.stack.length - 1] + store.stack[store.stack.length - 2];
    return {
      //currentInput: store.currentInput,
      ...store,
      stack: [...store.stack.slice(o, store.stack.length - 2), answer]
    };
  }
}

const reduxStore = createStore(reducer);
console.log("initial redux store", reduxStore);
export default reducer;
