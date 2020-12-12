import {GET_QUIZES, GET_QUIZ} from './actionTypes'

export const getQuizes = () => {
	return {
		type: GET_QUIZES
	}
}

export const getQuiz = (quizId) => {
	return {
		type: GET_QUIZ,
		quizId
	}
}