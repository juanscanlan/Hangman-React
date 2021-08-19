import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

import React from 'react'


class YouWin extends React.Component {


    render() {
        if (this.props.win) {
            return (
                <div className="YouWin">
                    <div className="YouWin__block">
                        <span>Congratulations!</span>
                        <Button className="YouWin__block-button" onClick={() => window.location.reload()}>New Word</Button>
                    </div>
                </div>
            )
        } else {
            return (null)
        }

    }

}

export default YouWin