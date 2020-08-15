//This is from FCC's React exercises

//JSX is React, which is allows you to write HTML in Javascript

//If you want to write Javascript in JSX it is written like this
{'this is treated as JavaScript code'}


// /Function call that places JSX into React's representation of the DOM

ReactDOM.render*JSX, document.getElementById('root'))

//Make a const defined as JSX that makes a h1 element saying Hello JSX!
const JSX = <h1>Hello JSX!</h1>;

//JSX must return a single element

// Define a new constant JSX that renders a div which contains the following elements in order:
// An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.
// write your code here
const JSX = 
            <div>
            <h1>Hello</h1>
            <p>World</p>
            <ul>
            <li>Hello</li>
            <li>World</li>
            <li>Hello</li>
            </ul>
            </div>


//To put comments inside JSX
{/* */}

//ReactDOM is an API that renders JSX/Components to a specific node in the DOM
ReactDOM.render(JSX, document.getElementById('challenge-node'))

//All HTML attributes/event references in JSXX are camelCase, i.e. onClick and className
const JSX = (
    <div className = 'myDiv'>
      <h1>Add a class to this div</h1>
    </div>
);

//In JSX you can use self closing tags and all tags must be closed
<div /> and <br />

//Functions in JSX render components which can be added on to one another to make a webpage. They can render stateless components and require the first letter to be capitalized
const DemoComponent = function() {
    return (
      <div className='customClass' />
    );
  };

//React can compose multiple components together creating an App parent component and sub-children components
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }

<ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};

//You can nest components too
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
<TypesOfFruit />
      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
<Fruits />
        { /* change code above this line */ }
      </div>
    );
  }
};

//Components and class components can be nested within one another
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
<NonCitrus/>
<Citrus/>
        { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
<Fruits/>
        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

//Here is a typical React class declaration using extends, constructor/super, render and then an API call to append to DOM
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>My First React Component!
      </h1>
      </div>      
    )
  }

}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

//React parent components can pass properties to child components using the following syntax
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>{props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date = {Date()}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

//You can pass arrays as props to components/subcomponents like so
const List = props => {
  return <p>{props.tasks.join(", ")}</p>;
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
      </div>
    );
  }
}

//You can set default props in components to return a default, if you pass something undefined it will pass undefined, null returns null
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line

ShoppingCart.defaultProps = {
  location: 0
}

//You can override default props by directly assigning the prop to a value
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return <Items quantity = {10} />
    { /* change code above this line */ }
  }
};

//You can require props to be a specific type in order for them to be returned within a component like so
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line
Items.propTypes = {quantity: PropTypes.number.isRequired}
// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

//You can access and create props within ES6 class components like so
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
<ReturnTempPassword tempPassword = 'asdfasdf' />
          { /* change code above this line */ }
        </div>
    );
  }
};

//Here is a little review on how to define a stateless functional component, define a default props value, define a propvalue type
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line

const Camper = (props) => {
return (
  <p>{props.name}</p>
);
}
Camper.propTypes = { name: 
PropTypes.string.isRequired }
Camper.defaultProps = { name: 'CamperBot'}

//You can create a sate in the constructor portion of the ES6 class function, state is is an object you store any iformation your apps need to have access/update to
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
this.state = {
  name: 'cullen'
}
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

//You can access the state via javascript within the render portion of the es6 function
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
const name = this.state.name
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
<h1>{name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

//You can also change the state within a component by using setState({})
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line
this.setState({name:'React Rocks!'})
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

//You can bind methods to parts of components using the 'this' keyword
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // change code below this line
this.handleClick = this.handleClick.bind(this)
    // change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

//You can monitor the state of your components by using functions since the state is async, you can view props and methods by passing setState a function

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
this.toggleVisibility = this.toggleVisibility.bind(this)
    // change code above this line
  }
  // change code below this line
toggleVisibility(){
      this.setState(state => {
      if (state.visibility === true) {
         return { visibility: false };
       } else {
         return { visibility: true };
      }
    });
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

//You can pass props and methods to the state using a function to setState, this is important because your state is async and you want your state to be updated async

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
this.increment = this.increment.bind(this)
this.decrement = this.decrement.bind(this)
this.reset = this.reset.bind(this)
    // change code above this line
  }
  // change code below this line

//There should be three methods that setState

increment(){
  this.setState(state => ({
    count: state.count + 1
  }));
}
decrement(){
  this.setState(state => ({
    count: state.count - 1
  }));
}
reset() {
  this.setState(state => ({
    count: 0
  }));
}
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

//You can use an input form to pass stateless data to the state and then have it rendered to the dom using methods defined within the component and passed to the state
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
this.handleChange = this.handleChange.bind(this)
    // change code above this line
  }
  // change code below this line
handleChange(event){
  this.setState({
input: event.target.value

  });
}
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
<input value = {this.state.input} onChange = {this.handleChange.bind(this)}/>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

//You can create a controlled form that the state controls in React
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};

//You can pass state as props to child components
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot"
    };
  }
  render() {
    return (
      <div>
        // Here we will call this.state.name in order to pass the value of
        CamperBot // to the NavBar component
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        // Since we passed in the CamperBot state value into the the NavBar
        component above // the h1 element below will render the value passed
        from state
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}

//You can pass a callback functio as props

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

//Lifecycle methods perform actions at specific points in the lifecycle of a component, componentWillMount() is called before render()
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('hello world')
  }
  render() {
    return <div />
  }
};

//componentDidMount() handles most API calls or calls to the server, it's called after a component is mounted to the DOM
//This example uses setTimeout to mimic an API call
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { this.state.activeUsers}</h1>
      </div>
    );
  }
};
//You can directly add event listeners to the dom using the lifecycle methods, React uses a synthetic dom and you typically need to add functional event listeners using this practice
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + "You pressed the enter key! "
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

//You can tell React when to rerender when props change, in this instance we want it to rerender when the value of a certain prop is even
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
    if(nextProps.value % 2 == 0){
    return true}
    return false;
     // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
//You can apply styling to JSX elements by enclosing the style = {{}} in objects and making sure that properties must be camelCase
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}> Big Red</div>
    );
  }
};
//You can state styles to be an object with properties and then set the values later in a JSX element
const styles = {
  color: 'purple',
  fontSize: 40,
  border: "2px solid purple",
};

class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};
//You can insert JS without {} right before the return statement inside of the render method inside JSX components
const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    
    const answer = possibleAnswers[this.state.randomIndex] // << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }
{answer}
          { /* change code above this line */ }
        </p>
      </div>
    );
  }
};

//You can use conditionals in the render method to display different components based upon conditionals
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
 }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    if (this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
    } else {
      return (
        <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
    }
  }
};

//You can use && in JSX to eliminate if/else conditionals, make sure that it is used in {} in JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // change code below this line
    (this.state.display && <h1>Displayed!</h1>)
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
          /* change code here */
        }
      </div>
    );
  }
};


  

