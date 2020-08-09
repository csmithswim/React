import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
      return (
        <button 
          className="square" 
          onClick={props.onClick()}         
        >                     
          {props.value}
        </button>
      );
}   

  class Board extends React.Component {  
    constructor(props) {        /*Method that creates/initializes an object created with a class, limited to one per class, can  */
      super(props);             /* super keyword to call the constructor of the super class, a subclass of the parent */
      this.state = { 
        squares: Array(9).fill(null),    /* Setting Board's initial state to contain an array of 9 nulls corresponding to 9 squares */
      };
    }

    handleClick(i) {
      const squares = this.state.squares.slice(); //Creating a copy of the squares array to modify, immutability is ipmortant!
      squares[i] = 'X';
      this.setState({squares: squares});
    }

    renderSquare(i) {
      return (
      <Square 
      value={this.state.squares[i]}          /*Passing a prop from the parent Board component to the Square component */
      onClick={() => this.handleClick(i)}
      />       
      );
  }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );