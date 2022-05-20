import React from "react"

export default function Trivia(){
    
    const [results, setResults] = React.useState([])
    
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&category=27&type=multiple")
            .then(res => res.json())
            .then(data => data.results)
            .then(results => {
                let i = 0
                const new_results = results.map(result => {
                    const all_results = [...result.incorrect_answers]
                    const random_position = Math.floor(Math.random() * 3)
                    all_results.splice(random_position, 0, result.correct_answer)
                    return {
                        ...result,
                        "all_results": all_results,
                        "id": i++
                    }
                })
                return new_results
            })
            .then(new_results => setResults(new_results))
    }, [])
    
    const questionElements = results.map(result => {
        return (
            <div className="quiz" key={result.id}>
                <h3 className="question">{result.question}</h3>
                <div className="answers">
                    {result.all_results.map(ans => <button className="answer" key={ans}>{ans}</button>)}
                </div>
            </div>
        )
    })
    
    
    
    return (
        <div>
            {questionElements}
        </div>
    )
}