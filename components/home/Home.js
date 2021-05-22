import Lane from '@components/support/structure/Lane'
import Text from '@components/support/typography/Text'
import BaseLayout from '@components/support/layouts/BaseLayout'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<BaseLayout>
			<Lane>
				<Text as="h1" className={styles.title}>
					I am Index
				</Text>
			</Lane>
		</BaseLayout>
	)
}

export default Home
