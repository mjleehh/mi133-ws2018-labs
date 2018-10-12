import React from 'react'

export default function Display(props) {
    return <div>
        <div>{props.acc}</div>
        <div>{props.pendingOp}</div>
        <div>{props.input}</div>
    </div>
}