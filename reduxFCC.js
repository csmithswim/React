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

  