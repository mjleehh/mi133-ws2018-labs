import React from 'react'

export default function Digits(props) {
    const addDigit = digit => () => {
        props.addDigit(digit)
    }

    const nums = [1,2,3]
    const buttons = nums.map((digit, index) =>
        <button
            key={index}
            onClick={addDigit(digit)}
        >{digit}</button>)

    console.log(props)

    return <div>
        {buttons}
    </div>
}