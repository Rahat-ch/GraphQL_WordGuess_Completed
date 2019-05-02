import React, { Component } from 'react';
import './App.css';
import wordBank from './wordBank'
import Display from './components/Display'
import Incorrect from './components/Incorrect';
import Guess from './components/Guess';

const getRandomWord = () => {
  return wordBank[Math.floor(Math.random() * wordBank.length)]
}

const initialState = {
  word: getRandomWord(),
  guessed: [],
  lives: 5,
  restart: false,
}


class App extends Component {
  //the state begins by randomly selecting a word from the wrodbank imported above
  //keeps track of all guessed letters in an array named guess
  constructor(props){
    super(props)
    this.state = initialState
  }
  

  updateGuessed = (letter) => {
    if(this.state.guessed.includes(letter)){
      alert(`You already guessed ${letter}`)
    } else {
      this.setState({
      guessed: [...this.state.guessed, letter]
    })
    }
  }

  updateLives = (letter) => {
    if (!this.state.guessed.includes(letter) && !this.state.word.split('').includes(letter)){
      this.setState({
        lives: this.state.lives -1
      })
    }
  }

  gameOver = () => {
    if (this.state.lives <= 0) {
      alert(`Uh oh you lost! The word was ${this.state.word}`)
      this.setState({
        restart: true
      })
    } else if (this.wordGuessed()){
      alert(`Nice you guessed the word ${this.state.word}`)
      this.setState({
        restart: true
      })
    }
  }

  wordGuessed = () => {
    const answer = this.state.word.split('').map(letter => {
      if (this.state.guessed.includes(letter)){
        return letter
      }
    })
    return answer.join('') ===this.state.word
  }

  updateGameState = async (letter) => {
    this.updateGuessed(letter)
    await this.updateLives(letter)
    this.gameOver()
  }

  handleRestart = () => {
    initialState.word = getRandomWord()
    this.setState(initialState)
    
  }

  render() {
    return (
    <div className="App">
    <h1>GraphQL Word Guess</h1>
     Lives: {this.state.lives}
     
     
    <Display
     word = {this.state.word}
     guessed = {this.state.guessed}
      />

    <Guess 
    updateGameState={this.updateGameState}
    />

    <Incorrect 
    word={this.state.word}
    guessed ={this.state.guessed}
    />

    {this.state.restart && <button onClick={() => this.handleRestart()}>Restart</button>}
    </div>
    );
  }
}

export default App;





//for later
//user
//number of wins 
