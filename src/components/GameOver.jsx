import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './GameOver.css'

import WellDone from '../img/welldone.svg'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Score: {quizState.score}</p>
        <p>Vooce acertou {quizState.score} de {quizState.questions.length} perguntas</p>
        <img src={WellDone} alt="Fim do Quiz"></img>
        <button onClick={() => dispatch({type: 'NEW_GAME'})}>Reiniciar</button>
    </div>
  )
}

export default GameOver
