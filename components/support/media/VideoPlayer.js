/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef } from 'react'
import PlayIcon from '@icons/Play'
import styles from './VideoPlayer.module.scss'

const VideoPlayer = ({ src, cover, ...props }) => {
    const [played, setPlayed] = useState(false)
    const videoRef = useRef(null)
    const handlePlay = () => {
        if (!played) {
            setPlayed(true)
            videoRef.current.play()
        }
    }

    return (
        <div
            role="button"
            className={`${styles.container} ${
                played ? styles.containerPlayed : ''
            }`}
            onClick={handlePlay}
            {...props}
        >
            <video
                ref={videoRef}
                src={src}
                controls={played}
                className={styles.player}
            ></video>

            {!played ? (
                <>
                    <div
                        className={styles.background}
                        style={{
                            backgroundImage: `url('${cover}')`,
                        }}
                    ></div>

                    <div className={styles.play}>
                        <PlayIcon />
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default VideoPlayer
