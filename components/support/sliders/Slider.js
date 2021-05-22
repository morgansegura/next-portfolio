/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { chunk } from '@scripts/support/arr'
import { useState } from 'react'
import styles from './Slider.module.scss'

const Slider = ({ items, renderItem, perPane }) => {
    const [panes] = useState(
        chunk(items, perPane).map(chunk => ({
            id: String(Math.random()),
            chunk,
        })),
    )

    const [activePaneId, setActivePaneId] = useState(panes?.[0].id)
    const activePaneIndex = panes.findIndex(pane => pane.id === activePaneId)
    const isFirst = activePaneIndex === 0
    const isLast = activePaneIndex === panes.length - 1

    const handleSlides = direction => {
        if (direction === 'right' && activePaneIndex !== panes.length - 1) {
            setActivePaneId(panes[activePaneIndex + 1].id)
        } else if (direction === 'left' && activePaneIndex !== 0) {
            setActivePaneId(panes[activePaneIndex - 1].id)
        }
    }

    return (
        <div className={styles.slider}>
            <div
                className={`${styles.sliderArrowLeft} ${
                    isFirst ? styles.arrowDisabled : ''
                }`}
                onClick={() => handleSlides('left')}
            >
                <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.61339 0.946641C8.09339 0.426641 7.25339 0.426641 6.73339 0.946641L0.613389 7.06664C0.0933887 7.58664 0.0933887 8.42664 0.613389 8.94664L6.73339 15.0666C7.25339 15.5866 8.09339 15.5866 8.61339 15.0666C9.13339 14.5466 9.13339 13.7066 8.61339 13.1866L3.44006 7.99997L8.61339 2.82664C9.13339 2.30664 9.12006 1.45331 8.61339 0.946641Z"
                        fill="#171717"
                    />
                </svg>
            </div>
            <div
                className={`${styles.sliderArrowRight} ${
                    isLast ? styles.arrowDisabled : ''
                }`}
                onClick={() => handleSlides('right')}
            >
                <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.38658 0.946615C0.866582 1.46661 0.866582 2.30661 1.38658 2.82661L6.55992 7.99995L1.38658 13.1733C0.866582 13.6933 0.866582 14.5333 1.38658 15.0533C1.90658 15.5733 2.74658 15.5733 3.26658 15.0533L9.38658 8.93328C9.90658 8.41328 9.90658 7.57328 9.38658 7.05328L3.26658 0.933281C2.75992 0.426614 1.90658 0.426615 1.38658 0.946615Z"
                        fill="#171717"
                    />
                </svg>
            </div>
            <div className={`${styles.sliderContainer}`}>
                {panes.map(({ id, chunk }, i) => {
                    const isPrev = i < activePaneIndex
                    const isActive = id === activePaneId
                    const isNext = i > activePaneIndex
                    const className = `${styles.pane} ${
                        isPrev ? styles.panePrev : ''
                    } ${isActive ? styles.paneActive : ''} ${
                        isNext ? styles.paneNext : ''
                    }`

                    return (
                        <div key={id} className={className}>
                            {chunk.map(item => (
                                <div key={item.id} className={styles.item}>
                                    {renderItem(item)}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider
