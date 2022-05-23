import React from "react"


export default function openingPage(props){
    return (
        <div className="startPage">
            <h1 className="quizzical">Quizzical</h1>
            <p className="quizzical-subtext">Check how much trivia you know!</p>
            <button className="start-btn"
                    onClick={props.HandleStartClick}>
                        Start quiz
            </button>
        </div>
    )
}