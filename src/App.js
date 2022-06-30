import React from 'react'
import Start from './components/Start'
import Question from './components/Question'
import { nanoid } from 'nanoid'


export default function App() {
    const [showStart, setShowStart] = React.useState(true)
    const [data, setData] = React.useState([])
    const [checkAnswer, setCheckAnswer] = React.useState(false)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=3")
            .then(res => res.json())
            .then(result => {
                console.log(result)
                const questionObjects = result.results.map(item => {
                    const { question, correct_answer, incorrect_answers } = item
                    const [incorrect1, incorrect2, incorrect3] = incorrect_answers
                    const correctObject = { option: correct_answer, value: true }
                    const incorrectObject1 = { option: incorrect1, value: false }
                    const incorrectObject2 = { option: incorrect2, value: false }
                    const incorrectObject3 = { option: incorrect3, value: false }
                    const optionsArr = [correctObject, incorrectObject1, incorrectObject2, incorrectObject3]
                    const shuffledOptions = shuffle(optionsArr)
                    return { question: question, options: shuffledOptions }
                })
                setData(questionObjects)
            })
    }, [])

    const questions = data.map(item => {
        return (
            <Question
                key={nanoid()}
                question={item.question}
                options={item.options}
                checkAnswer={checkAnswer}
            />
        )
    })

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function handleStart() {
        setShowStart(!showStart)
    }

    function check() {
        setCheckAnswer(true)
    }

    return (
        <div className='container'>
            {showStart && <Start handleStart={handleStart} />}
            {
                !showStart &&
                <div className='questions'>
                    {questions}
                </div>
            }
            {
                !showStart &&
                <button onClick={check} className='check-btn'>Check answers</button>
            }
        </div>
    )
}