import Lane from '@components/support/structure/Lane'
import Text from '@components/support/typography/Text'
import BaseLayout from '@components/support/layouts/BaseLayout'
import styles from './Cv.module.scss'

const Cv = () => {
	return (
		<BaseLayout>
			<Lane>
				<Text as="h1" className={styles.title}>
					I am Curriculum Vitae
				</Text>
			</Lane>
		</BaseLayout>
	)
}

export default Cv
