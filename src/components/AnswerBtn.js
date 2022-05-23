import React from "react"

export default function AnswerBtn(props){
    const [answerClicked, setAnswerClicked] = React.useState(false)
    function handleClickedAnswer(){
        setAnswerClicked(prevVer => !prevVer)
    }
    return (
        <button className={answerClicked? "answer answer-clicked": "answer"} 
                key={props.ans}
                onClick={handleClickedAnswer}>
                {props.ans}
        </button>
    )
}