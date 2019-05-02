import React, { Component } from 'react';

class Incorrect extends Component {

    getWrongLetters(){
       const wrong = this.props.guessed.filter(letter => {
           return !this.props.word.split('').includes(letter)
        })
        return wrong
    }
    render() {
        return (
            <div>
              Incorrect Letters: {this.getWrongLetters()}  
            </div>
        );
    }
}

export default Incorrect;

