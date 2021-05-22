import styles from './YoutubeVideoPlayer.module.scss'

const YoutubeVideoPlayer = ({ videoId, ...props }) => {
    return (
        <div className={styles.videoContainer}>
            <iframe
                className={styles.video}
                src={'https://www.youtube.com/embed/' + videoId}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Video"
                allowFullScreen
                {...props}
            ></iframe>
        </div>
    )
}

export default YoutubeVideoPlayer
