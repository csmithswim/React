//Redux controlls the whole state with React and other frameworks/libraries from the store object, To create store you must use the Redux method createStore() that takes a reducer function as an argument like so
const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  
const store = Redux.createStore(reducer);

  //You can retrieve the current state of store by using getState() method, the previous code where we define reducer and return state is rewritten more concisely
    const store = Redux.createStore(
    (state = 5) => state
  );
    // change code below this line
  
const currentState = store.getState();
//In Redux, state updates are triggered by actions, which are Javascript objects that contain information about an action event that has occured
// Define an action here:
let action = {type: 'LOGIN'};

//In Redux you can create actions by using an action creator, which is a Javascript functiont hat returns an action
const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  
  const actionCreator = () => action;

  //The dispatch method can dispatch actions to the Redux store, calling store.dispatch() and passing the value returned from an action creator sends an action back to the store

  const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction())

  //The reducer function decides what to do with the store when an action is created and dispatched
  const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // change code below this line
  if (action.type === 'LOGIN'){
    return {
      login: true
    };
  } else {
    return state;
  }
    // change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  



