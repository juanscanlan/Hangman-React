import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

import React from 'react'


class TryAgain extends React.Component {


    render() {
        if (this.props.lose) {
            return (
                <div>
                    <span>You lose</span>
                    <div>
                        <Button onClick={() => window.location.reload()}>Try New Word</Button>
                    </div>
                </div>

            )
        } else {
            return (null)
        }

    }

}

export default TryAgain