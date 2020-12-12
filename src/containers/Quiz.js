import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {getQuiz} from '../store/actions/quiz'

import backspaceImg from '../assets/icons/backspace.svg'
import correctImg from '../assets/icons/correct.svg'
import q1 from '../assets/quationimg/q1.jpg'
import wrongImg from '../assets/icons/wrong.svg'

class Quiz extends Component {
	state = {
		step: 0,
		isFinished: false,
		pickedAnswers: []
	}

	componentDidMount() {
		this.props.getQuiz(this.props.match.params.id)
	}

	nextQuestion = (pickedAnswer) => {
		if (Number(this.state.step) !== this.props.currentQuiz.questions.length-1) {
			this.setState({
				step: this.state.step + 1
			})
		} else {
			this.setState({
				isFinished: true
			})
		}

		const newPickedAnswers = [...this.state.pickedAnswers]
		newPickedAnswers[this.state.step] = pickedAnswer
		this.setState({
			pickedAnswers: newPickedAnswers
		})
	}

	pickStep = (step) => {
		this.setState({
			step
		})
	}

	restart = () => {
		this.setState({
			step: 0,
			isFinished: false,
			pickedAnswers: []
		})
	}

	render() {
		return (
			<main className="quiz-single" style={{background: this.props.currentQuiz.gradient}}>
				<NavLink to="/" className="backspace">
					<img src={backspaceImg} alt="backspace" />
				</NavLink>
				<h1 className="title">{this.props.currentQuiz.name}</h1>
				







				







				<div className="container">
				
					<div className="quiz">
					
						{!this.state.isFinished ? (
							<Fragment>
								<div className="quiz__question">
								
									{this.props.currentQuiz.questions[this.state.step].title}
									
								</div>

								<div className="img__question">
								
									<img width={660} src={this.props.currentQuiz.img} alt="correctImg" />

								</div>
							
								<div className="quiz__answers">
								
									{this.props.currentQuiz.questions[this.state.step].answers.map((answer, idx) => (
										<div
											data-test={this.state.pickedAnswers[idx]}
											className={`quiz__answer ${this.state.pickedAnswers[this.state.step] === answer ? 'active' : ''}`}
											key={idx}
											onClick={() => this.nextQuestion(answer)}
										>
											{answer}
										</div>
									))}
								</div>
								<div className="quiz__steps">
									{this.props.currentQuiz.questions.map((question, idx) => (
										<div
											className={`quiz__step ${this.state.pickedAnswers.length >= idx ? 'active' : ''}`}
											key={idx}
											onClick={() => this.state.step >= idx ? this.pickStep(idx) : false}
										>
											{idx+1}
										</div>	
									))}
								</div>
							</Fragment>
						) : (
							<Fragment>
								<h1 className="quiz__finish-title">Вы успешно прошли тест!</h1>
								
								<div className="quiz__finish-result">
									{this.props.currentQuiz.questions.map((question, idx) => (
										<div className="quiz__finish-answer" key={idx}>
										<span>
											{question.title}
											<strong>{this.state.pickedAnswers[idx]}</strong>
										</span>
										{question.correctAnswer === this.state.pickedAnswers[idx] ? (
											<img src={correctImg} alt="correctImg" />
										) : (
											<img src={wrongImg} alt="correctImg" />
										)}
									</div>
									))}
								</div>
								<div className="quiz__finish-btns">
									<button onClick={this.restart}>Начать заново</button>
									<NavLink to="/">Вернуться на главную</NavLink>
								</div>
							</Fragment>
						)}
					</div>
				</div>
			</main>
		)
	}
}

const  mapStateToProps = state => {
	return {
		currentQuiz: state.quiz.currentQuiz
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getQuiz: quizId => dispatch(getQuiz(quizId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)