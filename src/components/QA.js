import React from "react";
import AnswerBtn from "./AnswerBtn"

export default function QA(props){

        return  (
            <div className="quiz" key={props.result.id}>
                <h3 className="question">{props.result.question}</h3>
                <div className="answers">
                    {props.result.all_answers.map((ans, i)  => <AnswerBtn 
                         
                                                            key={ans}
                                                            id={i}
                                                            ans={ans}
                                                    />)}
                </div>
            </div>
        )
}