import hangman0 from '../img/hangman0.png'
import hangman1 from '../img/hangman1.png'
import hangman2 from '../img/hangman2.png'
import hangman3 from '../img/hangman3.png'
import hangman4 from '../img/hangman4.png'
import hangman5 from '../img/hangman5.png'
import hangman6 from '../img/hangman6.png'
import congrats from '../img/Congratulations.gif'

const hangImages = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6]

function Image(props) {
    if (props.win) {
        return(
            <img className="display__image" src={congrats} alt="YouWin" />
            )
    } else {
        return (
            <img className="display__image" src={hangImages[props.count]} alt="Hangman" />    
        )
    }
}

export default Image