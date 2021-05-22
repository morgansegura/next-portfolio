import Link from 'next/link'
import BaseLayout from '@components/support/layouts/BaseLayout'
import Lane from '@components/support/structure/Lane'
import Text from '@components/support/typography/Text'
import ContentModal from '@support/modal/ContentModal'

import styles from './PortfolioLanding.module.scss'

const PortfolioLanding = ({ error, loading, posts }) => {
	const renderPosts = posts => {
		return posts.map(post => (
			<li key={post.id}>
				<Link href={`/portfolio/${post.id}`}>
					<a>{post.title}</a>
				</Link>
			</li>
		))
	}

	return (
		<BaseLayout>
			<Lane>
				<Text as="h1" className={styles.title}>
					I am portfolio
				</Text>
				{loading && <Text className={styles.loading}>Loading...</Text>}
				{posts && <ul>{renderPosts(posts)}</ul>}
				{error && (
					<Text as="p" className={styles.error}>
						{error.message}
					</Text>
				)}
			</Lane>
		</BaseLayout>
	)
}

export default PortfolioLanding
