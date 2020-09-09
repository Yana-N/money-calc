import React from 'react'
import HistoryItem from './HistoryItem'

const History = ({transactions, delTransaction}) => {
	return (
		<section className="history">
			{transactions.length > 0
				? <h3>История расходов</h3>
				: <h3>Пора следить за деньгами <span role="img" aria-label="" aria-labelledby="">🤑</span></h3>}
			<ul className="history__list">
				{
					transactions.map((item) => <HistoryItem key={item.id} transaction={item} delTransaction={delTransaction}/>)
				}
			</ul>
		</section>
	)
}

export default History
