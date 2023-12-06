import SubTitle from '../components/subTitle/SubTitle'
import ProjectList from '../components/projectList/ProjectList'
import {FC} from 'react' 

const HomePage:FC =() => {
  return (
    <>
      <SubTitle title='ПРОЕКТЫ'/>
      <ProjectList/>
    </>
  )
}

export default HomePage
