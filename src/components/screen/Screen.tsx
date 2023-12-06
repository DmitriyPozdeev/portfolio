import {FC} from 'react'
import styles from './screen.module.css'

interface Props {
  image: string
  width?: number
}
const Screen: FC<Props> = ({image, width}) => {
  return (
    <div className={styles.wrapper} style={{width}} >
      <img src={image} className={styles.image} width={width}/>
    </div>
  )
}
export  default Screen