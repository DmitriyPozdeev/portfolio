import {FC} from 'react'
import styles from './header.module.css'
import ContactBar from '../contactBar/ContactBar'

interface Props {
  location: string
}
const Header: FC<Props> = ({location}) => {
  return (
    <header className={styles.header}>
      <h1>
        <a href='/'>
          Дмитрий Поздеев
         
        </a>
      </h1>
      <h2 className={styles.description}>
        Разработка SPA, MPA
      </h2>
      <p className={styles.detail}>
        Занимаюсь разработкой веб-приложений посредством React, React-Router, MobX, MobX-State-Tree, AntD, Vite, {location !== '/about' ? <a href='/about'>...</a> : '...'}
      </p>
      <ContactBar/>
    </header>
  )
}
export default Header
