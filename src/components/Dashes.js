import React from 'react'
import './Dashes.css'
import Image from './Image.js'

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
            incorrectGuesses: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        let randIdx = Math.floor(Math.random() * this.state.list.length)
        this.setState({
            word: this.state.list[randIdx],
            completeness: "_".repeat(this.state.list[randIdx].length).split("")
        })
    }

    handleClick(event) {
        let { name } = event.target
        let indxs = getAllIndexes(this.state.word, name)
        let tempWord = [...this.state.completeness]

        console.log(this.state.hangmanCount)
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
        }




    }

    render() {
        return (
            <div className="Dashes">
                <Image count={this.state.hangmanCount} incorrectGuesses={this.state.incorrectGuesses} />
                <hr />
                <p>{this.state.word}</p>
                <p>{this.state.completeness.join(" ")}</p>
                <hr />
                <div className="buttonsHang">
                    <Button className="hangButton" variant="info" name="a" onClick={this.handleClick}>A</Button>
                    <Button className="hangButton" variant="info" name="b" onClick={this.handleClick}>B</Button>
                    <Button className="hangButton" variant="info" name="c" onClick={this.handleClick}>C</Button>
                    <Button className="hangButton" variant="info" name="d" onClick={this.handleClick}>D</Button>
                    <Button className="hangButton" variant="info" name="e" onClick={this.handleClick}>E</Button>
                    <Button className="hangButton" variant="info" name="f" onClick={this.handleClick}>F</Button>
                    <Button className="hangButton" variant="info" name="g" onClick={this.handleClick}>G</Button>
                    <Button className="hangButton" variant="info" name="h" onClick={this.handleClick}>H</Button>
                    <Button className="hangButton" variant="info" name="i" onClick={this.handleClick}>I</Button>
                    <Button className="hangButton" variant="info" name="j" onClick={this.handleClick}>J</Button>
                    <Button className="hangButton" variant="info" name="k" onClick={this.handleClick}>K</Button>
                    <Button className="hangButton" variant="info" name="l" onClick={this.handleClick}>L</Button>
                    <Button className="hangButton" variant="info" name="m" onClick={this.handleClick}>M</Button>
                    <Button className="hangButton" variant="info" name="n" onClick={this.handleClick}>N</Button>
                    <Button className="hangButton" variant="info" name="o" onClick={this.handleClick}>O</Button>
                    <Button className="hangButton" variant="info" name="p" onClick={this.handleClick}>P</Button>
                    <Button className="hangButton" variant="info" name="q" onClick={this.handleClick}>Q</Button>
                    <Button className="hangButton" variant="info" name="r" onClick={this.handleClick}>R</Button>
                    <Button className="hangButton" variant="info" name="s" onClick={this.handleClick}>S</Button>
                    <Button className="hangButton" variant="info" name="t" onClick={this.handleClick}>T</Button>
                    <Button className="hangButton" variant="info" name="u" onClick={this.handleClick}>U</Button>
                    <Button className="hangButton" variant="info" name="v" onClick={this.handleClick}>V</Button>
                    <Button className="hangButton" variant="info" name="w" onClick={this.handleClick}>W</Button>
                    <Button className="hangButton" variant="info" name="x" onClick={this.handleClick}>X</Button>
                    <Button className="hangButton" variant="info" name="y" onClick={this.handleClick}>Y</Button>
                    <Button className="hangButton" variant="info" name="z" onClick={this.handleClick}>Z</Button>
                </div>
            </div>
        )
    }
}

export default Dashes