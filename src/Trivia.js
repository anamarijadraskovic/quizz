import React from "react"
import QA from "./components/QA"

export default function Trivia(props){
    console.log(props.results)

    const QAs = props.results.map(res => {
        return (<QA 
                    result={res}
                    key={res.id}
                />)})
    
    return (
        <div>
            {QAs}
        </div>
    )
}
