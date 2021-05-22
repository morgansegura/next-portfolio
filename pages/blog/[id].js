import axios from 'axios'
import { useRef } from 'react'
import { useMedia } from 'react-use'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ContentModal from '@support/modal/ContentModal'
import Page from '@components/page/Page'
import PageHead from '@components/page/PageHead'
import BlogLanding from '@components/blog/BlogLanding'
import BlogPost from '@components/blog/BlogPost'

const BlogPage = ({ posts, post, currentPage, prevPage, nextPage }) => {
	const router = useRouter()

	const routeBase = `/portfolio`
	const isMobile = useMedia('(max-width: 767px)', false)
	const modalRef = useRef(null)

	const handlePageClose = () => {
		router.push(`${routeBase}`)
	}

	const handlePageChange = () => {
		modalRef.current.scrollTop = 0
	}

	// Should just render page
	if (isMobile && currentPage) {
		return (
			<>
				<Head>
					<title>{post.title} | Morgan Segura</title>
				</Head>
				<Page
					path={routeBase}
					page={post}
					prevPageId={prevPage}
					nextPageId={nextPage}
					onClose={handlePageClose}
					onChange={handlePageChange}>
					<BlogPost post={post} />
				</Page>
			</>
		)
	}

	return (
		<>
			<Head>
				<title>{post.title} | Morgan Segura</title>
			</Head>

			<BlogLanding posts={posts} />

			{currentPage ? (
				<ContentModal
					onClose={handlePageClose}
					head={<PageHead page={post} onClose={handlePageClose} />}
					ref={modalRef}>
					<Page
						path={routeBase}
						page={post}
						prevPageId={prevPage}
						nextPageId={nextPage}
						hasHead={false}
						onChange={handlePageChange}>
						<BlogPost raw={true} post={post} />
					</Page>
				</ContentModal>
			) : null}
		</>
	)
}

BlogPage.getInitialProps = async ({ query }) => {
	let post = {},
		posts = [],
		lastPage,
		currentPage,
		nextPage,
		prevPage
	try {
		const allPosts = await axios.get(
			`https://jsonplaceholder.typicode.com/posts`
		)

		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${query.id}`
		)
		post = res.data
		posts = allPosts.data.slice(0, 10)

		currentPage = query.id
		lastPage = posts.length
		nextPage =
			currentPage < posts.length ? Number(currentPage) + 1 : posts[0].id
		prevPage = currentPage > 1 ? Number(currentPage) - 1 : lastPage
	} catch (e) {
		console.error(e, 'Cannot get blog details.')
	}
	return { posts, post, currentPage, nextPage, prevPage }
}

export default BlogPage
