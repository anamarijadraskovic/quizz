import React from "react"
import Trivia from "./Trivia"

export default function App (){
    
    const [quizzStarted, setQuizzStarted] = React.useState(false)
    
    function HandleStartClick(){
        setQuizzStarted(true)
    }
    
    return (
        <main>
            <div className="yellow"></div>
            {quizzStarted ?
                <div className="quizz-container">
                    <Trivia />
                    <button className="check-btn"
                    >
                    Check answers</button>
                </div>
                :
                <div className="startPage">
                    <h1 className="quizzical">Quizzical</h1>
                    <p className="quizzical-text">Check how much trivia you know!</p>
                    <button className="start-btn"
                            onClick={HandleStartClick}
                            >Start quiz</button>
                </div>
            }
            <div className="babyBlue"></div>
        </main>
    )
}