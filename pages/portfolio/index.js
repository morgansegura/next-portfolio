import useSWR from 'swr'
// import { useGetData } from '@/actions'
import PortfolioLanding from '@components/portfolio/PortfolioLanding'

const fetcher = url => fetch(url).then(res => res.json())

const PortfolioHome = () => {
	const { data, error, loading } = useSWR('/api/v1/posts', fetcher)

	return <PortfolioLanding loading={loading} error={error} posts={data} />
}

export default PortfolioHome
