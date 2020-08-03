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








  

