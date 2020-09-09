import React from 'react'

const Operation = ({addTransaction, addDescription, addAmount, description, amount}) => {
	return (
		<section className="operation">
			<h3>Новая операция</h3>
			<form id="form">
				<label>
					<input onChange={addDescription} value={description} type="text" className="operation__fields operation__name" placeholder="Наименование операции" />
				</label>
				<label>
					<input onChange={addAmount} value={amount} type="number" min="0" className="operation__fields operation__amount" placeholder="Введите сумму" />
				</label>
				<div className="operation__btns">
					<button onClick={() => addTransaction(false)} type="button" className="operation__btn operation__btn-subtract">Расход</button>
					<button onClick={() => addTransaction(true)} type="button" className="operation__btn operation__btn-add">Доход</button>
				</div>

			</form>
		</section>
	)
}

export default Operation
