// ====================================================
// IMPORTS
import styles from './main.module.css'
import React from 'react'
import Convert from './convert/convert'
import ErrorBoundary from "../components/errorBoundary/errorBoundary";


// ====================================================
// Component

const Main = props => {
	// JSX
	return (
		<section className={styles.body}>
			<ErrorBoundary>
				<Convert/>
			</ErrorBoundary>
					
		</section>
	)
}

// ====================================================
// Exports

export default React.memo(Main)
