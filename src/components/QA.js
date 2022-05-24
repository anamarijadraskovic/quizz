import React from "react";
import AnswerBtn from "./AnswerBtn"

export default function QA(props){

    const [ansClicked, setAnsClicked] = React.useState()
    const [isCorrect, setIsCorrect] = React.useState(false)

    React.useEffect(() => {
        if (props.result.correct_answer === props.result.all_answers[ansClicked]) {
            setIsCorrect(true)
        }
    }, [ansClicked])
    
    function handleClickedAnswer(id){
        setAnsClicked(id)
    }

    return  (
        <div className="quiz" key={props.result.id}>
            <h3 className="question">{props.result.question}</h3>
            <div className="answers">
                {props.result.all_answers.map((ans, i)  => <AnswerBtn 
                                                        key={ans}
                                                        id={i}
                                                        ans={ans}
                                                        ansClicked={ansClicked}
                                                        handleClick={handleClickedAnswer}
                                                />)}
            </div>
        </div>
    )
}