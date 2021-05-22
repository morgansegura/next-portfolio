import Head from 'next/head'
// import { Provider as AuthProvider } from 'next-auth/client'
// import Scaffold from '@support/structure/Scaffold'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
	return (
		// <AuthProvider session={pageProps.session}>
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Component {...pageProps} />

			{/*<Scaffold />*/}
		</>
		// </AuthProvider>
	)
}

export default MyApp
