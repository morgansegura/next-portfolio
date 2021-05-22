import Link from 'next/link'
import BaseLayout from '@components/support/layouts/BaseLayout'
import Lane from '@components/support/structure/Lane'
import Text from '@components/support/typography/Text'

import styles from './BlogLanding.module.scss'

const BlogLanding = ({ error, loading, posts }) => {
	const renderPosts = posts => {
		return posts.map(post => (
			<li key={post.id}>
				<Link href={`/blog/${post.id}`}>
					<a>{post.title}</a>
				</Link>
			</li>
		))
	}

	return (
		<BaseLayout>
			<Lane>
				<Text as="h1" className={styles.title}>
					I am Blog
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

export default BlogLanding
