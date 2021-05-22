import Lane from '@components/support/structure/Lane'
import Text from '@components/support/typography/Text'
import BaseLayout from '@components/support/layouts/BaseLayout'
import styles from './About.module.scss'

const About = () => {
	return (
		<BaseLayout>
			<Lane>
				<Text as="h1" className={styles.title}>
					I am About
				</Text>
			</Lane>
		</BaseLayout>
	)
}

export default About
