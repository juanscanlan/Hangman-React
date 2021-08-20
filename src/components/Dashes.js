import React from 'react'
import Image from './Image.js'

import Buttons from './Buttons.js'

import EndResult from './EndResult.js'

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
            if (!tempWord.includes('_')) {
                this.setState({
                    win: true
                })
            }
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
        console.log(this.state.win)
        return (
            <div className="Dashes">
                <EndResult win={this.state.win} lose={this.state.lose}/>
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

export default Dashes