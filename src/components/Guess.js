import React, { Component } from 'react';

class Guess extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const input = this.refs.text.value
        this.props.updateGameState(input)
        this.refs.text.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="text" maxLength='1'/>
                    <button>Guess Letter</button>
                </form>
                
            </div>
        );
    }
}

export default Guess;