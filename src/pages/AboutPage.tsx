import Screen from '../components/screen/Screen'
import SubTitle from '../components/subTitle/SubTitle'
import {FC} from 'react' 
import sert1 from '../assets/sert1.jpg'
import sert2 from '../assets/sert2.jpg'
import styles from './pages.module.css'
const AboutPage:FC =() => {
  return (
    <div>
      <SubTitle title='ОБО МНЕ'/>
      <p>
        В 2006 году окончил Челябинский металлургический колледж по специальности "Программное обеспечение вычислительной техники и автоматизированных систем". В 2015 году окончил Челябинский государственный университет, получил диплом бакалавра по специальности "Фундаментальная информатика и информационные технологии". После этого на работе перевелся работать на АТС и моя основная деятельность это настройка телефонных станций и администрирование крупной базы данных отдела. 
        В 2018 году начал интересоваться веб-разработкой и по сей день довольно активно стараюсь в ней развиваться. Проходил платные курсы, учился самостоятельно, читая документацию, статьи, туториалы, смотря видео. Пару лет назад стал активно интересоваться бекендом и применять свои навыки в решении рабочих задач. В планах получить опыт коммерческой разработки и перейти на работу, напямую связанную с разработкой ПО.
      </p>
      <div className={styles.about_screen_wrapper}>
        <Screen image={sert1} width={240}/>
        <Screen image={sert2} width={240}/>
      </div>
      
    </div>
  )
}

export default AboutPage
