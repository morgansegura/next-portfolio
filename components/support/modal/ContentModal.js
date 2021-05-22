import { forwardRef, useRef } from 'react'
import { useLockBodyScroll, useIntersection, useClickAway } from 'react-use'
import styles from './ContentModal.module.scss'

const Head = ({ children, fixed }) => {
	return (
		<div
			className={`${styles.head} ${
				fixed && false ? styles.headFixed : ''
			}`}>
			{children}
		</div>
	)
}

const ContentModal = ({ children, head, onClose }, ref) => {
	const contentRef = useRef(null)
	const contentIntersection = useIntersection(contentRef, {
		root: null,
		threshold: 1,
	})

	useLockBodyScroll()
	useClickAway(contentRef, () => {
		onClose()
	})

	return (
		<div ref={ref} className={styles.modal}>
			<div ref={contentRef} className={styles.content}>
				{head ? (
					<Head
						fixed={
							contentIntersection &&
							contentIntersection.isIntersecting
						}>
						{head}
					</Head>
				) : null}
				{children}
			</div>
		</div>
	)
}

export default forwardRef(ContentModal)
