import React from 'react'

import Image from './Image.js'
import Buttons from './Buttons.js'
import EndResult from './EndResult.js'

import words from '../words.json'

// Input a word and a letter. Returns an array of indices of such letter in the word. 
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            list: words,
            word: '',
            hint: '',
            completeness: [],
            hangmanCount: 0,
            incorrectGuesses: '',
            lose: false,
            win: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        // On page reload, get a random word from the word list and save it to state.
        let randIdx = Math.floor(Math.random() * this.state.list.length)
        this.setState({
            word: this.state.list[randIdx].toUpperCase(),
            //Create dashed line with the same number of characters as the word. 
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
            // If no more missing letters, the user has won
            if (!tempWord.includes('_')) {
                this.setState({
                    win: true
                })
            }
        } else {
            //If incorrect letter, it is added to incorrectGuesses and the mistake count increases by 1.
            let newHangman = this.state.hangmanCount + 1
            let incGuesses = this.state.incorrectGuesses.concat(name.toUpperCase(), ' ')
            this.setState({
                hangmanCount: newHangman,
                incorrectGuesses: incGuesses
            })
            //6 mistakes and the user loses
            if (newHangman === 6) { this.setState({ lose: true }) }
        }
    }

    render() {
        return (
            <div className="Dashes">
                <EndResult win={this.state.win} lose={this.state.lose} word={this.state.word}/>
                <div className="display">
                    <Image count={this.state.hangmanCount} win={this.state.win} />
                    <div className="display__scorer">
                        <span className="display__scorer__mistakes">Mistakes: [{this.state.hangmanCount}/6]</span>
                        <span className="display__scorer__guesses">Incorrect Guesses: {this.state.incorrectGuesses}</span>   
                        <div className="display__scorer__dashes">
                            <span>{this.state.completeness.join(" ")}</span>
                        </div>
                        <div className="display__scorer__buttons">
                            <Buttons state={this.state} handleClick={this.handleClick}/>
                        </div>
                    </div>
                </div>
                <p className="Answer">Answer: {this.state.word}</p>
            </div>
        )
    }
}

export default Main