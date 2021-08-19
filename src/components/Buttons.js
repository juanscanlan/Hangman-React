import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Button } from 'react-bootstrap'

class Buttons extends React.Component {
    render() {
        return(
            <div className="buttons-container">
                <div className="buttons-container__buttons">
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="A" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('A') || this.props.state.completeness.includes('A')}>A</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="B" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('B') || this.props.state.completeness.includes('B')}>B</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="C" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('C') || this.props.state.completeness.includes('C')}>C</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="D" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('D') || this.props.state.completeness.includes('D')}>D</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="E" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('E') || this.props.state.completeness.includes('E')}>E</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="F" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('F') || this.props.state.completeness.includes('F')}>F</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="G" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('G') || this.props.state.completeness.includes('G')}>G</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="H" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('H') || this.props.state.completeness.includes('H')}>H</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="I" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('I') || this.props.state.completeness.includes('I')}>I</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="J" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('J') || this.props.state.completeness.includes('J')}>J</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="J" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('K') || this.props.state.completeness.includes('K')}>K</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="L" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('L') || this.props.state.completeness.includes('L')}>L</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="M" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('M') || this.props.state.completeness.includes('M')}>M</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="N" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('N') || this.props.state.completeness.includes('N')}>N</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="O" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('O') || this.props.state.completeness.includes('O')}>O</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="P" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('P') || this.props.state.completeness.includes('P')}>P</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="Q" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('Q') || this.props.state.completeness.includes('Q')}>Q</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="R" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('R') || this.props.state.completeness.includes('R')}>R</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="S" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('S') || this.props.state.completeness.includes('S')}>S</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="T" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('T') || this.props.state.completeness.includes('T')}>T</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="U" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('U') || this.props.state.completeness.includes('U')}>U</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="V" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('V') || this.props.state.completeness.includes('V')}>V</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="W" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('W') || this.props.state.completeness.includes('W')}>W</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="X" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('X') || this.props.state.completeness.includes('X')}>X</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="Y" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('Y') || this.props.state.completeness.includes('Y')}>Y</Button>
                    <Button className="buttons-container__buttons-hangButton" variant="info" name="Z" onClick={this.props.handleClick} disabled={this.props.state.win || this.props.state.lose || this.props.state.incorrectGuesses.includes('Z') || this.props.state.completeness.includes('Z')}>Z</Button>
                </div>
            </div>
            
        )
    }
    
}

export default Buttons