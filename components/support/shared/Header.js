import Link from 'next/link'
import Logo from '@support/icons/Logo'
import Lane from '@support/structure/Lane'
import Text from '@support/typography/Text'
import styles from './Header.module.scss'

const Header = () => {
	const navItems = [
		{
			href: '/',
			label: 'Home',
		},
		{
			href: '/about',
			label: 'About',
		},
		{
			href: '/cv',
			label: 'CV',
		},
		{
			href: '/portfolio',
			label: 'Portfolio',
		},
		{
			href: '/blog',
			label: 'Blog',
		},
	]
	return (
		<header className={styles.header}>
			<Lane>
				<div className={styles.container}>
					<Link href="/">
						<a>
							<Logo className={styles.logo} />
						</a>
					</Link>
					<nav className={styles.nav}>
						{navItems.map(({ href, label }) => (
							<Link key={label} href={href}>
								<a className={styles.navItem}>{label}</a>
							</Link>
						))}
					</nav>
				</div>
			</Lane>
		</header>
	)
}

export default Header
