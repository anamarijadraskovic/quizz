import React from "react"

export default function AnswerBtn(props){
    
    function setClassName() {
        if (!props.quizEnded) {
            if (props.id == props.ansClicked) {
                return "answer clicked"
            }
            return "answer"
        }
        if (props.ans === props.correctAnswer) {
            return "answer correct-answers"
        }
        if (props.id == props.ansClicked)
            return "answer clicked incorrect"

        return "answer not-chosen"
    }

    return (
        <button className={setClassName()} 
                key={props.id}
                onClick={() => props.handleClick(props.id)}>
                {props.ans}
        </button>
    )
}
