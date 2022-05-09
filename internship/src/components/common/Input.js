import React from 'react'

const Input = (props) => {
    return (
        <>
            <input className='FormInput' type={props.type} placeholder={props.placeholder} text={props.text}/>
        </>
    )
}

export default Input