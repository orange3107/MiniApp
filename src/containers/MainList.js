import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class QuizList extends Component {
	render() {
		return (
			<main className="quiz-list" style={{background: '#333'}}>
				<h1 className="title">Quiz</h1>
				<div className="container">
					<div className="quizes">
						{this.props.quizes.map((quiz, idx) => (
							<NavLink
								className='quizes__item'
								to={`/quiz/${quiz.id}`}
								key={idx}
								style={{background: quiz.gradient}}
							>
								{quiz.name}
							</NavLink>
						))}
					</div>
				</div>
			</main>
		)
	}
}

const mapStateToProps = state => {
	return {
		quizes: state.quiz.quizes
	}
}

export default connect(mapStateToProps)(QuizList)