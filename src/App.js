import React from 'react'
import {Total, History, Operation} from './components/index'

class App extends React.Component {

	state = {
		transactions: JSON.parse(localStorage.getItem('calcMoney')) || [],
		description: '',
		amount: '',
		resultIncome: 0,
		resultExpense: 0,
		totalBalance: 0,
	}

	componentDidMount() {
		this.getTotalBalance()
	}

	addTransaction = (add) => {

		const transactions = [
			...this.state.transactions,
			{
				id: `cm${(+new Date()).toString(16)}`,
				description: this.state.description,
				amount: this.state.amount,
				add,
			},
		]

		this.setState({
			transactions,
			description: '',
			amount: '',
		}, this.updateBalance)
	}

	addAmount = (e) => {
		this.setState({
			amount: +e.target.value,
		})
	}

	addDescription = (e) => {
		this.setState({
			description: e.target.value,
		})
	}

	getIncome = () => this.state.transactions
		.filter(item => item.add)
		.reduce((acc, item) => acc + item.amount, 0)

	getExpense = () => this.state.transactions
		.filter(item => !item.add)
		.reduce((acc, item) => acc + item.amount, 0)

	getTotalBalance = () => {
		const resultIncome = this.getIncome()
		const resultExpense = this.getExpense()

		const totalBalance = resultIncome - resultExpense

		this.setState({
			resultIncome,
			resultExpense,
			totalBalance,
		})
	}

	addStorage = () => {
		localStorage.setItem('calcMoney', JSON.stringify(this.state.transactions))
	}

	delTransaction = (key) => {
		const transactions = this.state.transactions.filter(item => item.id !== key)
		this.setState({
			transactions
		}, this.updateBalance)
	}

	updateBalance = () => {
		this.getTotalBalance()
		this.addStorage()
	}

	render() {
		return (
			<>
				<header>
					<h1>Кошелек</h1>
					<h2>Калькулятор расходов</h2>
				</header>

				<main>
					<div className="container">
						<Total
							resultExpense={this.state.resultExpense}
							resultIncome={this.state.resultIncome}
							totalBalance={this.state.totalBalance}
						/>
						<History delTransaction={this.delTransaction} transactions={this.state.transactions}/>
						<Operation addTransaction={this.addTransaction}
						           addAmount={this.addAmount}
						           addDescription={this.addDescription}
						           description={this.state.description}
						           amount={this.state.amount}
						/>
					</div>
				</main>
			</>
		)
	}
}


export default App
