import React from 'react'
//import './Dashes.css'
import Image from './Image.js'

import Buttons from './Buttons.js'

import TryAgain from './TryAgain.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

//import hangman0 from './hangman0.png'

import words from '../words.json'

function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

class Dashes extends React.Component {
    constructor() {
        super()
        this.state = {
            list: words,
            word: '',
            completeness: [],
            hangmanCount: 0,
            incorrectGuesses: '',
            lose: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        let randIdx = Math.floor(Math.random() * this.state.list.length)
        this.setState({
            word: this.state.list[randIdx].toUpperCase(),
            completeness: "_".repeat(this.state.list[randIdx].length).split("")
        })
    }

    handleClick(event) {
        let { name } = event.target
        let indxs = getAllIndexes(this.state.word, name)
        let tempWord = [...this.state.completeness]

        // If correct letter guessed, add letters to completeness array at corresponding index
        if (this.state.word.includes(name)) {
            for (let i in indxs) { tempWord[indxs[i]] = name }
            this.setState({ completeness: tempWord })
        } else {
            let newHangman = this.state.hangmanCount + 1
            let incGuesses = this.state.incorrectGuesses.concat(name.toUpperCase(), ' ')
            this.setState({
                hangmanCount: newHangman,
                incorrectGuesses: incGuesses
            })
            if (newHangman === 6) { this.setState({ lose: true }) }
        }




    }

    render() {
        return (
            <div className="Dashes">
                
                <TryAgain lose={this.state.lose} />
                
                <div className="display">
                    <Image count={this.state.hangmanCount} incorrectGuesses={this.state.incorrectGuesses} />
                    <div className="display__scorer">
                        <span className="display__scorer__mistakes">Attempts: {this.state.hangmanCount}/6</span>
                        <span className="display__scorer__guesses">Incorrect Guesses: {this.state.incorrectGuesses}</span>   
                        <span className="display__scorer__dashes">{this.state.completeness.join(" ")}</span>
                        <div className="display__scorer__buttons">
                            <Buttons states={this.state} handleClick={this.handleClick} lose={this.state.lose} incorrectGuesses={this.state.incorrectGuesses} completeness={this.state.completeness}/>
                        </div>
                    </div>
                    
                </div>
                
                
                <hr />
                <p>{this.state.word}</p>
                <p className="mainDashes">{this.state.completeness.join(" ")}</p>
                <hr />

                <Buttons states={this.state} handleClick={this.handleClick} lose={this.state.lose} incorrectGuesses={this.state.incorrectGuesses} completeness={this.state.completeness}/>
            </div>
        )
    }
}

export default Dashes