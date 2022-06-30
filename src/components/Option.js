import React from "react";

export default function Option(props) {
    const style =
        props.checkAnswer ?
            { backgroundColor: props.value ? 'green' : 'red', color: 'white' } : {}
    // let classname = ''
    // if (props.value === true && props.checkAnswer === true) {
    //     classname = 'radio-label-reveal-true'
    //     console.log("reveal-true")
    // }
    // if (props.value === false && props.checkAnswer === true) {
    //     classname = 'radio-label-reveal-false'
    //     console.log("reveal-false")
    // }
    return (
        <div>
            <input
                type="radio"
                id={props.id}
                name={props.name}
                value={props.value}
                className='radio-input'
            />
            <label
                htmlFor={props.id}
                style={style}
                className='radio-label'
                dangerouslySetInnerHTML={{ __html: props.text }}
            // className={classname ? classname : 'radio-label'}
            >
            </label>
        </div >
    )
}