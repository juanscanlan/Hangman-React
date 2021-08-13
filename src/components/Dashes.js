import React from 'react'
import './Dashes.css'
import Image from './Image.js'
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
                <Image count={this.state.hangmanCount} incorrectGuesses={this.state.incorrectGuesses} />
                <TryAgain lose={this.state.lose} />
                <hr />
                <p>{this.state.word}</p>
                <p className="mainDashes">{this.state.completeness.join(" ")}</p>
                <hr />

                <div className="buttonsHang">
                    <Button className="hangButton" variant="info" name="A" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('A') || this.state.completeness.includes('A')}>A</Button>
                    <Button className="hangButton" variant="info" name="B" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('B') || this.state.completeness.includes('B')}>B</Button>
                    <Button className="hangButton" variant="info" name="C" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('C') || this.state.completeness.includes('C')}>C</Button>
                    <Button className="hangButton" variant="info" name="D" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('D') || this.state.completeness.includes('D')}>D</Button>
                    <Button className="hangButton" variant="info" name="E" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('E') || this.state.completeness.includes('E')}>E</Button>
                    <Button className="hangButton" variant="info" name="F" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('F') || this.state.completeness.includes('F')}>F</Button>
                    <Button className="hangButton" variant="info" name="G" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('G') || this.state.completeness.includes('G')}>G</Button>
                    <Button className="hangButton" variant="info" name="H" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('H') || this.state.completeness.includes('H')}>H</Button>
                    <Button className="hangButton" variant="info" name="I" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('I') || this.state.completeness.includes('I')}>I</Button>
                    <Button className="hangButton" variant="info" name="J" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('J') || this.state.completeness.includes('J')}>J</Button>
                    <Button className="hangButton" variant="info" name="J" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('K') || this.state.completeness.includes('K')}>K</Button>
                    <Button className="hangButton" variant="info" name="L" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('L') || this.state.completeness.includes('L')}>L</Button>
                    <Button className="hangButton" variant="info" name="M" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('M') || this.state.completeness.includes('M')}>M</Button>
                    <Button className="hangButton" variant="info" name="N" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('N') || this.state.completeness.includes('N')}>N</Button>
                    <Button className="hangButton" variant="info" name="O" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('O') || this.state.completeness.includes('O')}>O</Button>
                    <Button className="hangButton" variant="info" name="P" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('P') || this.state.completeness.includes('P')}>P</Button>
                    <Button className="hangButton" variant="info" name="Q" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('Q') || this.state.completeness.includes('Q')}>Q</Button>
                    <Button className="hangButton" variant="info" name="R" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('R') || this.state.completeness.includes('R')}>R</Button>
                    <Button className="hangButton" variant="info" name="S" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('S') || this.state.completeness.includes('S')}>S</Button>
                    <Button className="hangButton" variant="info" name="T" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('T') || this.state.completeness.includes('T')}>T</Button>
                    <Button className="hangButton" variant="info" name="U" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('U') || this.state.completeness.includes('U')}>U</Button>
                    <Button className="hangButton" variant="info" name="V" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('V') || this.state.completeness.includes('V')}>V</Button>
                    <Button className="hangButton" variant="info" name="W" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('W') || this.state.completeness.includes('W')}>W</Button>
                    <Button className="hangButton" variant="info" name="X" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('X') || this.state.completeness.includes('X')}>X</Button>
                    <Button className="hangButton" variant="info" name="Y" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('Y') || this.state.completeness.includes('Y')}>Y</Button>
                    <Button className="hangButton" variant="info" name="Z" onClick={this.handleClick} disabled={this.state.lose || this.state.incorrectGuesses.includes('Z') || this.state.completeness.includes('Z')}>Z</Button>
                </div>
            </div>
        )
    }
}

export default Dashes