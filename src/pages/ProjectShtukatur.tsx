import {FC} from 'react'
import Video from '../components/video/Video'
import video from '../assets/shtukaturVideo.mp4'
import SubTitle from '../components/subTitle/SubTitle'
const ProjectShtukatur: FC = () => {
  return (
    <>
     <SubTitle title='САЙТ СТРОИТЕЛЬНОЙ ФИРМЫ'/>
     <Video video={video}/>
     <p>
      Самый первый реализованный мною проект. В нем я делал все под ключ, кроме логотипа. Я общался с заказчиком, собирал информацию, писал текст, придумывал дизайн, верстал, размещал на хостинге. 
     </p>
    </>
  )
}
export default ProjectShtukatur