import React from "react"

export default function AnswerBtn(props){
    return (
        <button className={props.id === props.ansClicked ? "answer answer-clicked": "answer"} 
                key={props.id}
                onClick={() => props.handleClick(props.id)}>
                {props.ans}
        </button>
    )
}
