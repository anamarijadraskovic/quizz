import React from "react"

export default function AnswerBtn(props){
    
    function setClassName() {
        if (!props.quizEnded) {
            if (props.id === props.ansClicked) {
                return "answer clicked"
            }
            return "answer"
        }
        if (props.ans === props.correctAnswer) {
            return "answer correct-answers"
        }
        if (props.id === props.ansClicked)
            return "answer clicked incorrect"

        return "answer not-chosen"
    }

    var rawAnswer = props.ans
    var answer1 = rawAnswer.replace(/&quot;|&#039;|&deg;/g, "'" )
    var answer = answer1.replace(/&amp;/g, "&")

    return (
        <button className={setClassName()} 
                key={props.id}
                onClick={() => props.handleClick(props.id)}>
                {answer}
        </button>
    )
}