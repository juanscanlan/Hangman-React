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
    let hangImage = 'hangman'.concat(props.count)
    console.log(hangImage)
    return (
        <div className="HangImage">
            <img src={hangImages[props.count]} alt="" />
        </div>
    )
}

export default Image