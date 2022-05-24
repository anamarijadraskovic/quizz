import React from "react"
import QA from "./components/QA"

export default function Trivia(props){
    
    const[quizEnded, setQuizEnded] = React.useState(false)
    const[QAisCorrect, setQAisCorrect] = React.useState([])

    function checkFinalResults(isCorrect){
        setQAisCorrect(oldVer => [...oldVer, isCorrect])
    }

    console.log(QAisCorrect)

    React.useEffect(()=>{
            let count = 0
            for (let qa of QAisCorrect){
                if(qa === true){
                    count++
                }
            }
            console.log(count)
    }, [QAisCorrect])

    
    const QAs = props.results.map(res => {
        return (<QA 
                    result={res}
                    key={res.id}
                    checkFinalResults={checkFinalResults}
                    quizEnded={quizEnded}
                />)})
    
    return (
        <div>
            {QAs}
            <button className="check-btn"
                    onClick={() => setQuizEnded(true)}
            >
            Check answers</button>
        </div>
    )
}
