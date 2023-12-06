import {FC} from 'react'
import styles from './projectCard.module.css'

import ProjectCardTagList from '../projectCardTagList/ProjectCardTagList'
import { ProjectData } from '../../data/projects'

interface Props {
  cardData: ProjectData
}
const ProjectCard: FC<Props> = ({cardData}) => {
  const {id, title, image, description, tags} = cardData;
  return (
    <li key={id} className={styles.card}>
      <div className={styles.cover}>
        <img src={image} width={200} className={styles.image}/>
      </div>
      <div className={styles.content}>
        <h3 className={styles.card_title}>
          {title}
        </h3>
        <p className={styles.description}>
          {description}
        </p>
        <ProjectCardTagList list={tags}/>
      </div>
    </li>
  )
}
export  default ProjectCard