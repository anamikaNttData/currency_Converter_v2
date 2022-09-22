export const countTheNumberOfDecimalPlaces = x =>
	x.toString().includes('.') ? x.toString().split('.').pop().length : 0
