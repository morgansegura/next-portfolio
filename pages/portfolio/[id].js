import axios from 'axios'
import { useRef, useState } from 'react'
import { useMedia } from 'react-use'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ContentModal from '@support/modal/ContentModal'
import Page from '@components/page/Page'
import PageHead from '@components/page/PageHead'
import PortfolioSingle from '@components/portfolio/PortfolioSingle'
import PortfolioPost from '@components/portfolio/PortfolioSingle'
import { useGetData } from '@/actions'

const Portfolio = () => {
	const router = useRouter()
	const routeBase = `/portfolio`
	const isMobile = useMedia('(max-width: 767px)', false)
	const modalRef = useRef(null)

	const {
		data: post,
		error,
		loading,
	} = useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null)

	const { data: posts } = useGetData(router.query.id ? `/api/v1/posts` : null)

	let nextPage = post?.id < posts?.length ? post?.id + 1 : 1,
		prevPage = post?.id > 1 ? post?.id - 1 : posts?.length

	const handlePageClose = () => {
		router.push(`${routeBase}`)
	}

	const handlePageChange = () => {
		modalRef.current.scrollTop = 0
	}

	// Should just render page
	if (isMobile && post) {
		return (
			<>
				<Head>
					<title>{post?.title} | Morgan Segura</title>
				</Head>
				<Page
					path={routeBase}
					page={post}
					prevPageId={prevPage}
					nextPageId={nextPage}
					onClose={handlePageClose}
					onChange={handlePageChange}>
					<PortfolioPost
						post={post}
						error={error}
						loading={loading}
					/>
				</Page>
			</>
		)
	}

	return (
		<>
			<Head>
				<title>{post?.title} | Morgan Segura</title>
			</Head>

			<PortfolioSingle post={post} error={error} loading={loading} />

			<ContentModal
				onClose={handlePageClose}
				head={
					post && <PageHead page={post} onClose={handlePageClose} />
				}
				ref={modalRef}>
				<Page
					path={routeBase}
					page={post}
					prevPageId={prevPage}
					nextPageId={nextPage}
					hasHead={false}
					onChange={handlePageChange}>
					<PortfolioPost
						raw={true}
						post={post}
						error={error}
						loading={loading}
					/>
				</Page>
			</ContentModal>
		</>
	)
}

export default Portfolio
