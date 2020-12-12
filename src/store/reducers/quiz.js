import {GET_QUIZ} from '../actions/actionTypes'

const initalState = {
	quizes: [
		{
			id: 1,
			name: 'Тест по Dota 2',
			gradient: 'linear-gradient(21deg, #dd03e4, #5611ec)',
			img:'https://9jm.org/images/games/00940/91701.jpg',
			questions: [
				{
					title: 'Куда пойти?',
					answers: ['Туда', 'Сюда', 'Влево', 'Вправо',],
					correctAnswer: 'Туда'
				}
			]
		},
		{
			id: 2,
			
			name: 'Тест по Javascript',
			gradient: 'linear-gradient(85deg, #fb63f9, #c2e534)',
			questions: [
				{
					title: 'Что из перечисленного не относится к JS:',
					answers: ['React', 'Vue', 'Laravel', 'Express'],
					correctAnswer: 'Laravel'
				},
				{
					title: 'Какой тип переменных лучше ипользовать:',
					answers: ['var', 'let/const'],
					correctAnswer: 'let/const'
				},
				{
					title: 'Какого нету логического оператора в JS:',
					answers: ['||', '&&', '!', '^!'],
					correctAnswer: '^!'
				},
				{
					title: 'Какого паттерна нету в JS:',
					answers: ['Строитель', 'Адаптер', 'Компоновщик', 'Дрессировщик', 'Наблюдатель'],
					correctAnswer: 'Дрессировщик'
				}
			]
		},
		
	],
	currentQuiz: {
		id: null,
		name: '',
		questions: [
			{
				title: '',
				answers: [],
				correctAnswer: ''
			}
		]
	}
}

export default function quizReducer(state = initalState, action) {
	switch(action.type) {
		case GET_QUIZ:
			return {
				...state,
				currentQuiz: state.quizes.find(quiz => quiz.id === Number(action.quizId))
			}
		default:
			return state
	}
}