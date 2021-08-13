import hangman0 from './hangman0.png'
import hangman1 from './hangman1.png'
import hangman2 from './hangman2.png'
import hangman3 from './hangman3.png'
import hangman4 from './hangman4.png'
import hangman5 from './hangman5.png'
import hangman6 from './hangman6.png'

import './Image.css'

const hangImages = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6]

function Image(props) {
    return (
        <div className="display">
            <img className="hangImage" src={hangImages[props.count]} alt="" />
            <span className="incorrectCount">Attempts: {props.count}/6</span>
            <span className="incorrectGuesses">Incorrect Guesses: {props.incorrectGuesses}</span>
        </div>
    )
}

export default Image