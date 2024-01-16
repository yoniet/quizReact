import { useCallback, useState } from "react";


import Question from "./Question.jsx";
import QUESTIONS from '../questions.js';
import Summary from "./Summary.jsx";



export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevAnswer => {
            return [...prevAnswer, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers}/>
        )
    }



    return (
        <div id="quiz">
            <div >
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSkipAnswer={handleSkipAnswer}
                    onSelect={handleSelectAnswer}
                />
            </div>
        </div>
    );
}