import React from "react";

export default function QA(props){

    const [answerClicked, setAnswerClicked] = React.useState(false)
    function handleClickedAnswer(){
        setAnswerClicked(prevVer => !prevVer)
    }
    
        return  (
            <div className="quiz" key={props.result.id}>
                <h3 className="question">{props.result.question}</h3>
                <div className="answers">
                    {props.result.all_answers.map(ans => <button className={answerClicked? "answer answer-clicked": "answer"} 
                                                            key={ans}
                                                            
                                                            onClick={handleClickedAnswer}>
                                                            {ans}
                                                    </button>)}
                </div>
            </div>
        )
}