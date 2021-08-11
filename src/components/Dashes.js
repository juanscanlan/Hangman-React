import React from 'react'
import './Dashes.css'

import Letters from './Letters.js'

import words from '../words.json'

class Dashes extends React.Component {
    constructor() {
        super()
        this.state = {
            list: words,
            randWord: ''
        }
    }

    componentDidMount() {
        let randIdx = Math.floor(Math.random() * this.state.list.length)
        this.setState({ randWord: this.state.list[randIdx] })
    }

    render() {
        return (
            <div className="Dashes">
                <p>{this.state.randWord}</p>
                <p>{"_ ".repeat(this.state.randWord.length)}</p>
                <Letters word={this.state.randWord} />
            </div>
        )
    }
}

export default Dashes