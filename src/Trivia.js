import React from "react"
import QA from "./components/QA"

export default function Trivia(props){
    
    const[QAisCorrect, setQAisCorrect] = React.useState([])
    const[numCorrect, setNumCorrect] = React.useState(0)

    function checkFinalResults(isCorrect){
        setQAisCorrect(oldVer => [...oldVer, isCorrect])
    }

    function reloadPage(){
        window.location.reload()
    }

    React.useEffect(()=>{
            let count = 0
            for (let qa of QAisCorrect){
                if(qa === true){
                    count++
                }
            }
            console.log(count)
            setNumCorrect(count)
    }, [QAisCorrect])
    
    const QAs = props.results.map(res => {
        return (<QA 
                    result={res}
                    key={res.id}
                    checkFinalResults={checkFinalResults}
                    quizEnded={props.quizEnded}
                />)})
    
    return (
        <div>
            {QAs}
                {props.quizEnded
                ?
                <footer>
                    <p className="score">You scored {numCorrect}/{props.results.length} correct answers</p>
                    <button className="play-again-btn"
                            onClick={reloadPage}
                    >Play again
                    </button>
                </footer>
                :
                <button className="check-btn"
                        onClick={() => props.setQuizEnded(true)}
                >Check Answers
                </button>
                }
        </div>
    )
}