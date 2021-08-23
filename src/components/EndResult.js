import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

import React from 'react'


class EndResult extends React.Component {
    render() {
        if (this.props.win) {
            return (
                <div className="EndResult">
                    <div className="EndResult__block">
                        <span className="EndResult__block-span">Congratulations!</span>
                        <Button className="EndResult__block-button" onClick={() => window.location.reload()}>New Word</Button>
                    </div>
                </div>
            )
        } else if (this.props.lose) {
            return (
                <div className="EndResult">
                    <div className="EndResult__block">
                        <span className="EndResult__block-span">{this.props.word}</span>
                        <Button className="EndResult__block-button" onClick={() => window.location.reload()}>Try Again</Button>
                    </div>
                </div>
            )
        } else {
            return (null)
        }
    }
}

export default EndResult