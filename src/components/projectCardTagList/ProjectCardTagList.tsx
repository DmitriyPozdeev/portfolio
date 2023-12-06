import {FC} from 'react'
import styles from './projectCardTagList.module.css'
import ProjectCardTag from '../projectCardTag/ProjectCardTag'

interface Props {
  list: string[]
}
const ProjectCardTagList: FC<Props> = ({list}) => {
  return (
    <ul className={styles.list}>
      {
        list.map((tag) => {
          return <ProjectCardTag text={tag}/>
        })
      }
    </ul>
  )
}
export default ProjectCardTagList