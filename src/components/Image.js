import hangman from './hangman.png'
import './Image.css'

function Image() {
    return (
        <div className="HangImage">
            <img src={hangman} alt="" />
        </div>
    )
}

export default Image