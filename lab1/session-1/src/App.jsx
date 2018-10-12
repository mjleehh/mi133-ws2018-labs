import React from 'react'

import Digits from './Digit'
import Display from './Display'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {input: "0", pendingOp: null, acc: null}
    }

    addDigit = digit => {
        this.setState({input: this.state.input + digit})
    }

    render() {
        const {input, pendingOp, acc} = this.state

        return <div>
            <Display acc={acc} pendingOp={pendingOp} input={input}/>
            <Digits addDigit={this.addDigit}/>
        </div>
    }
}