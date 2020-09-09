import React from 'react'

const HistoryItem = ({transaction, delTransaction}) => {
	return (
		<li className={`history__item history__item-${transaction.add ? 'plus' : 'minus'}`}>{transaction.description}
			<span className="history__money">{transaction.amount} ₽</span>
			<button onClick={() => {delTransaction(transaction.id)}} className="history__delete">x</button>
		</li>
	)
}

export default HistoryItem