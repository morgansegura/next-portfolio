import Link from 'next/link'
import Button from '@support/interaction/Button'
import styles from './AuthNav.module.scss'

const AuthNav = () => {
	return (
		<div className={styles.container}>
			<Link href="/api/v1/login">
				<a className={styles.login}>Login</a>
			</Link>
		</div>
	)
}

export default AuthNav
