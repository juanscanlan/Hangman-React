import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Button } from 'react-bootstrap'

class Buttons extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="buttons">
                <Button className="buttons__hangButton" variant="info" name="A" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('A') || this.props.completeness.includes('A')}>A</Button>
                <Button className="buttons__hangButton" variant="info" name="B" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('B') || this.props.completeness.includes('B')}>B</Button>
                <Button className="buttons__hangButton" variant="info" name="C" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('C') || this.props.completeness.includes('C')}>C</Button>
                <Button className="buttons__hangButton" variant="info" name="D" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('D') || this.props.completeness.includes('D')}>D</Button>
                <Button className="buttons__hangButton" variant="info" name="E" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('E') || this.props.completeness.includes('E')}>E</Button>
                <Button className="buttons__hangButton" variant="info" name="F" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('F') || this.props.completeness.includes('F')}>F</Button>
                <Button className="buttons__hangButton" variant="info" name="G" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('G') || this.props.completeness.includes('G')}>G</Button>
                <Button className="buttons__hangButton" variant="info" name="H" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('H') || this.props.completeness.includes('H')}>H</Button>
                <Button className="buttons__hangButton" variant="info" name="I" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('I') || this.props.completeness.includes('I')}>I</Button>
                <Button className="buttons__hangButton" variant="info" name="J" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('J') || this.props.completeness.includes('J')}>J</Button>
                <Button className="buttons__hangButton" variant="info" name="J" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('K') || this.props.completeness.includes('K')}>K</Button>
                <Button className="buttons__hangButton" variant="info" name="L" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('L') || this.props.completeness.includes('L')}>L</Button>
                <Button className="buttons__hangButton" variant="info" name="M" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('M') || this.props.completeness.includes('M')}>M</Button>
                <Button className="buttons__hangButton" variant="info" name="N" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('N') || this.props.completeness.includes('N')}>N</Button>
                <Button className="buttons__hangButton" variant="info" name="O" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('O') || this.props.completeness.includes('O')}>O</Button>
                <Button className="buttons__hangButton" variant="info" name="P" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('P') || this.props.completeness.includes('P')}>P</Button>
                <Button className="buttons__hangButton" variant="info" name="Q" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('Q') || this.props.completeness.includes('Q')}>Q</Button>
                <Button className="buttons__hangButton" variant="info" name="R" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('R') || this.props.completeness.includes('R')}>R</Button>
                <Button className="buttons__hangButton" variant="info" name="S" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('S') || this.props.completeness.includes('S')}>S</Button>
                <Button className="buttons__hangButton" variant="info" name="T" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('T') || this.props.completeness.includes('T')}>T</Button>
                <Button className="buttons__hangButton" variant="info" name="U" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('U') || this.props.completeness.includes('U')}>U</Button>
                <Button className="buttons__hangButton" variant="info" name="V" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('V') || this.props.completeness.includes('V')}>V</Button>
                <Button className="buttons__hangButton" variant="info" name="W" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('W') || this.props.completeness.includes('W')}>W</Button>
                <Button className="buttons__hangButton" variant="info" name="X" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('X') || this.props.completeness.includes('X')}>X</Button>
                <Button className="buttons__hangButton" variant="info" name="Y" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('Y') || this.props.completeness.includes('Y')}>Y</Button>
                <Button className="buttons__hangButton" variant="info" name="Z" onClick={this.props.handleClick} disabled={this.props.lose || this.props.incorrectGuesses.includes('Z') || this.props.completeness.includes('Z')}>Z</Button>
            </div>
        )
    }
    
}

export default Buttons