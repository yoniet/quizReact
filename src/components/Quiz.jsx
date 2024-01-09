import { useCallback, useState } from "react";

import QuizComplete from '../assets/quiz-complete.png';
import Question from "./Question.jsx";
import QUESTIONS from '../questions.js';

const TIMER = 15000;

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
    console.log(userAnswers)

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={QuizComplete} alt="Quiz Complete Img" />
                <h2>Quiz Completed</h2>
            </div>
        )
    }



    return (
        <div id="quiz">
            <div >
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    timeout={TIMER}
                    onTimeout={handleSkipAnswer}
                    onSelect={handleSelectAnswer}
                />
            </div>
        </div>
    );
}