import {FC} from 'react'
import ProjectCard from '../projectCard/ProjectCard'
import projectData, { ProjectData } from '../../data/projects'
import { Link } from 'react-router-dom'

const ProjectList: FC = () => {
  return (
    <ul>
      {
        projectData.map((data: ProjectData) => {
          const {link} = data
          return (
            <Link to={link}>
              <ProjectCard cardData={data}/>
            </Link>
          )
        }) 
      }
    </ul>
    
  )
}
export  default ProjectList
