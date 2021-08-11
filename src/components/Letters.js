import './Letters.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import React from 'react'

class Letters extends React.Component {
    constructor(props) {
        super()
        this.state = {
            word: props.word
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        let { name } = event.target
        console.log(name, this.state.word)
        this.state.word.includes(name) ? console.log(name) : console.log('no')
    }

    render() {
        return (
            <div className="Letters">
                <p>{this.state.word}y</p>
                <Button variant="info" name="a" onClick={this.handleClick}>A</Button>
                <Button variant="info" name="b" onClick={this.handleClick}>B</Button>
                <Button variant="info" name="c" onClick={this.handleClick}>C</Button>
                <Button variant="info" name="d" onClick={this.handleClick}>D</Button>
                <Button variant="info" name="e" onClick={this.handleClick}>E</Button>
                <Button variant="info" name="f" onClick={this.handleClick}>F</Button>
                <Button variant="info" name="g" onClick={this.handleClick}>G</Button>
                <Button variant="info" name="h" onClick={this.handleClick}>H</Button>
                <Button variant="info" name="i" onClick={this.handleClick}>I</Button>
                <Button variant="info" name="j" onClick={this.handleClick}>J</Button>
                <Button variant="info" name="k" onClick={this.handleClick}>K</Button>
                <Button variant="info" name="l" onClick={this.handleClick}>L</Button>
                <Button variant="info" name="m" onClick={this.handleClick}>M</Button>
                <Button variant="info" name="n" onClick={this.handleClick}>N</Button>
                <Button variant="info" name="o" onClick={this.handleClick}>O</Button>
                <Button variant="info" name="p" onClick={this.handleClick}>P</Button>
                <Button variant="info" name="q" onClick={this.handleClick}>Q</Button>
                <Button variant="info" name="r" onClick={this.handleClick}>R</Button>
                <Button variant="info" name="s" onClick={this.handleClick}>S</Button>
                <Button variant="info" name="t" onClick={this.handleClick}>T</Button>
                <Button variant="info" name="u" onClick={this.handleClick}>U</Button>
                <Button variant="info" name="v" onClick={this.handleClick}>V</Button>
                <Button variant="info" name="w" onClick={this.handleClick}>W</Button>
                <Button variant="info" name="x" onClick={this.handleClick}>X</Button>
                <Button variant="info" name="y" onClick={this.handleClick}>Y</Button>
                <Button variant="info" name="z" onClick={this.handleClick}>Z</Button>
            </div>
        )
    }

}

export default Letters