import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@support/interaction/Button'
import PageHead from './PageHead'
import styles from './Page.module.scss'

const Page = ({
	page,
	children,
	nextPageId,
	prevPageId,
	hasHead = true,
	path,
	onClose,
	onChange,
}) => {
	const router = useRouter()

	const handleNext = () => {
		if (onChange) {
			onChange()
		}
	}

	return (
		<div className={styles.page}>
			{hasHead ? (
				<div className={styles.head}>
					<PageHead page={page} onClose={onClose} />
				</div>
			) : null}

			<div className={styles.content}>{children}</div>

			{nextPageId || prevPageId ? (
				<div className={styles.footer}>
					<Link href={`${path}/${prevPageId}`}>
						<Button white onClick={handleNext}>
							Previous Page
						</Button>
					</Link>
					<Link href={`${path}/${nextPageId}`}>
						<Button primary onClick={handleNext}>
							Next Page
						</Button>
					</Link>
				</div>
			) : null}
		</div>
	)
}

export default Page
