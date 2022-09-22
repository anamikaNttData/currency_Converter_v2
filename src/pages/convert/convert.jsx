// ====================================================
// IMPORTS
import React, { useEffect, useState } from 'react'
import styles from './convert.module.css'
import Select from '../../components/select/select'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { countTheNumberOfDecimalPlaces } from '../../utils/countTheNumberOfDecimalPlaces'
import { useConvertCurrencyQuery } from '../../api/apiSlice'
import { setConversionResult } from '../../components/dataSlice'

// ====================================================
// Component

const Convert = () => {
	// Variables
	const dispatch = useDispatch()
	const navigation = useNavigate ()
	let [from, setFrom] = useState('USD')
	let [to, setTo] = useState('INR')
	let [fromForm, setFromForm] = useState(1)	
	let [conversionRate, setConversionRate] = useState(0)
	const { data, isSuccess } = useConvertCurrencyQuery({ from, to })	
	
	// ====================================================
	// Side effects
	useEffect(() => {
		let fromCount = fromForm
		let firstCurrency = from
		let secondCurrency = to

		if (firstCurrency) {
			setFrom((from = firstCurrency))
		}
		if (secondCurrency) {
			setTo((to = secondCurrency))
		}
		if (secondCurrency) {
			setFromForm((fromForm = fromCount))
		}
		if (isSuccess) {			
			setConversionRate(data.conversion_rate)			
		}
	}, [isSuccess, data])
	

	// ====================================================
	// JSX
	return (
		<div className={styles.cardsWrap}>
			<div className={styles.card}>
				<Select
					onItemClick={currency => {
						setFrom((from = currency))
						dispatch(setConversionResult(data))
					}}
					initialCurrency={from}
				/>
				<input
					type="number"
					className={styles.input}
					onChange={e => {
						setFromForm((fromForm = Number(e.target.value)))						
					}}
					value={fromForm === 0 ? '' : fromForm}
				/>
				<div
					onClick={() => {
						setFromForm((fromForm = ''))
					}}
					className={styles.clear}
				>
					clear
				</div>
			</div>
			<div className={styles.card}>
				<Select
					onItemClick={currency => {
						setTo((to = currency))	
						dispatch(setConversionResult(data))
					}}
					initialCurrency={to}
				/>
				<input
					type="text"
					value={
						countTheNumberOfDecimalPlaces(conversionRate * fromForm) < 4
							? conversionRate * fromForm
							: (conversionRate * fromForm).toFixed(4)
					}
					className={styles.input}
				/>
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(Convert)
