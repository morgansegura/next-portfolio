import { useGetData } from '@/actions'
import PortfolioLanding from '@components/portfolio/PortfolioLanding'

const PortfolioHome = () => {
	const { data, error, loading } = useGetData('/api/v1/posts')

	return <PortfolioLanding loading={loading} error={error} posts={data} />
}

export default PortfolioHome
