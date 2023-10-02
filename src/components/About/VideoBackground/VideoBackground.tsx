import styles from "./VideoBackground.module.scss";
import BgVideo from './Digital_Grapes.mp4'

type Props = {}

export const VideoBackground = ({}: Props) => {
  return (
    <div className={styles.videoBackground}>
        <video src={BgVideo} autoPlay muted loop className={styles.video}/>
    </div>
  )
}

