import React, { Component } from 'react';

class Display extends Component {
    render() {
        //split the word that is passed here into an array
        const gameWord = this.props.word.split('');

        //map each letter to an underscore
        const answer = gameWord.map(letter => {
            let hidden = '_'
            if(this.props.guessed.includes(letter)){
                hidden = letter
            }
            return hidden + ' '
        })


        return (
            <h3>{answer}</h3>
        );
    }
}

export default Display;