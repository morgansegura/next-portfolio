import { useEffect } from 'react'
import BaseLayout from '@components/support/layouts/BaseLayout'
import Lane from '@components/support/structure/Lane'
import Text from '@components/support/typography/Text'
import { ucTitle } from '@utils/helpers'
import styles from './PortfolioSingle.module.scss'

const Content = ({ post, error, loading }) => (
	<>
		{error && (
			<>
				<Text as="h1" className={styles.title}>
					{ucTitle(post.title)}
				</Text>
				<Text as="p" className={styles.description}>
					Body: {post.body}
				</Text>
				<Text as="p">ID: {post.id}</Text>
			</>
		)}
		{post && (
			<>
				<Text as="h1" className={styles.title}>
					{ucTitle(post.title)}
				</Text>
				<Text as="p" className={styles.description}>
					Body: {post.body}
				</Text>
				<Text as="p">ID: {post.id}</Text>
			</>
		)}
		{loading && <div className={atyles.loading}>Loading...</div>}
	</>
)

const PortfolioSingle = ({ post, raw = false }) => {
	useEffect(() => {
		const getPosts = async () => {
			const res = await fetch('/api/v1/posts')
			const data = await res.json()
		}
		getPosts()
	}, [])
	return (
		<>
			{raw ? (
				<Content post={post} />
			) : (
				<BaseLayout>
					<Lane>
						<Content post={post} />
					</Lane>
				</BaseLayout>
			)}
		</>
	)
}

export default PortfolioSingle
