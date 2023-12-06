import {FC} from 'react'
import styles from './video.module.css'

interface Props {
  video: string
}
const Video: FC<Props> = ({video}) => {
  return (
   
     <video className={styles.video} autoPlay controls>
      <source src={video}/>
     </video>
   
  )
}
export  default Video