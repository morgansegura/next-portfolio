import Header from '@components/support/shared/Header'
// import Page from '@components/page/Page'
import styles from './BaseLayout.module.scss'

const BaseLayout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			{children}
		</div>
	)
}

export default BaseLayout
