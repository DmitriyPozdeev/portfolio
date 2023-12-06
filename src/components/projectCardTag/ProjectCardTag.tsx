import {FC} from 'react'
import styles from './projectCardTag.module.css'

interface Props {
  text: string
}
const ProjectCardTag: FC<Props> = ({text}) => {
  return (
    <li className={styles.item}>
      {text}
    </li>
  )
}
export default ProjectCardTag