// ====================================================
// IMPORTS
import styles from './header.module.css'
import React from 'react'



// ====================================================
// Component

const Header = () => {
	

	// JSX
	return (
		<header className={styles.header}>
			
				<div className={styles.inner}>
					<div className={styles.logo}>currency converter</div>					
				</div>
			
		</header>
	)
}

// ====================================================
// Exports

export default React.memo(Header)
