import { useGetData } from '@/actions'
import BlogLanding from '@components/blog/BlogLanding'

const BlogHome = () => {
	const { data, error, loading } = useGetData('/api/v1/posts')

	return <BlogLanding loading={loading} error={error} posts={data} />
}

export default BlogHome
