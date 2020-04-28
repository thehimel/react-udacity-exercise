import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
    // Initialize the values
    state = {
        values: {
            value1: Math.floor(Math.random() * 100),
            value2: Math.floor(Math.random() * 100),
            value3: Math.floor(Math.random() * 100),
            numQuestions: 0,
            numCorrect: 0
        }
    }

    // Change the state values
    setNewValues = (point) => {
        this.setState((CurrentState) => ({
            values: {
                value1: Math.floor(Math.random() * 100),
                value2: Math.floor(Math.random() * 100),
                value3: Math.floor(Math.random() * 100),
                numQuestions: CurrentState.values.numQuestions + 1,
                numCorrect: CurrentState.values.numCorrect + point
            }
        }))
    }

    onTrueClick = (proposedAnswer) => {
        const values = this.state.values;

        // Calculate the correct answer
        const correctAnswer = values.value1 + values.value2 + values.value3;

        // If correct answer matches proposed answer, point = 1. Else point = 0
        if(correctAnswer == proposedAnswer) {
            this.setNewValues(1);
        }else{
            this.setNewValues(0);
        }
    }

    onFalseClick = (proposedAnswer) => {
        const values = this.state.values;

        // Calculate the correct answer
        const correctAnswer = values.value1 + values.value2 + values.value3;

        // This function is invoked when False button is pressed, thus opposite action of True button is taken.
        if(correctAnswer != proposedAnswer) {
            this.setNewValues(1);
        }else{
            this.setNewValues(0);
        }
    }

    render() {
        const value1 = this.state.values.value1;
        const value2 = this.state.values.value2;
        const value3 = this.state.values.value3;
        const numCorrect = this.state.values.numCorrect
        const numQuestions = this.state.values.numQuestions

        // Calculate the proposedAnswer
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
            <div className="game">
                <h2>Mental Math</h2>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>
                <button onClick = {() => this.onTrueClick(proposedAnswer)}>
                    True
                </button>
                <button onClick = {() => this.onFalseClick(proposedAnswer)}>
                    False
                </button>
                <p className="text">
                    Your Score: {numCorrect}/{numQuestions}
                </p>
            </div>
            </div>
        );
    }
}

export default App;
