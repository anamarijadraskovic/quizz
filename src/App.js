import React from "react"
import OpeningPage from "./components/OpeningPage"
import Trivia from "./Trivia"

export default function App (){

    const [quizzStarted, setQuizzStarted] = React.useState(false)
    const [results, setResults] = React.useState([])
    const [quizEnded, setQuizEnded] = React.useState(false)

    function HandleStartClick(){
        setQuizzStarted(prevMode => !prevMode)
    }

    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&difficulty=medium")
            .then(res => res.json())
            .then(data => data.results)
            .then(results => {
                let i = 0
                const new_results = results.map(result => {
                    const all_answers = [...result.incorrect_answers]
                    const random_position = Math.floor(Math.random() * 3)
                    all_answers.splice(random_position, 0, result.correct_answer)
                    return {
                        ...result,
                        "all_answers": all_answers,
                        "id": i++
                    }
                })
                return new_results
            })
            .then(new_results => setResults(new_results))
    }, [])

    return (
        <main>
            {quizzStarted ?
                <div className="quizz-container">
                    <Trivia
                        results={results}
                        quizEnded={quizEnded}
                        setQuizEnded={setQuizEnded}
                    />
                </div>
                :
                <OpeningPage 
                    HandleStartClick={HandleStartClick}
                />
            }
        </main>
    )
}