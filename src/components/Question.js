import React from 'react'
import { nanoid } from 'nanoid'
import Option from './Option'


export default function Question(props) {
    const name = nanoid()
    const optionsElements = props.options.map(item => {
        const id = nanoid()
        return (
            <Option
                id={id}
                name={name}
                text={item.option}
                value={item.value}
                checkAnswer={props.checkAnswer}
            />
        )
    })

    return (
        <div className='question-container'>
            <p dangerouslySetInnerHTML={{ __html: props.question }} className='question'></p>
            <div className='options'>
                <fieldset>
                    {props.options[0].option && optionsElements[0]}
                    {props.options[1].option && optionsElements[1]}
                    {props.options[2].option && optionsElements[2]}
                    {props.options[3].option && optionsElements[3]}
                </fieldset>
            </div>
        </div>
    )
}