import versal from '../assets/versal.jpg';
import phones from '../assets/phoneBook.jpg';
import shtukatur from '../assets/shtukatur.jpg';
import game from '../assets/game.jpg';  
import contacts from '../assets/contacts.jpg';
import versalVideo from '../assets/versal.mp4'
import gameVideo from '../assets/game.mp4'
import contactsVideo from '../assets/contacts.mp4'
import phoneBookVideo from '../assets/phoneBookVideo.mp4'
import shtukaturVideo from '../assets/shtukaturVideo.mp4'
 
export interface ProjectData {
  id: number,
  title: string; 
  image?: string,
  video: string,
  description: string | JSX.Element,
  tags: string[],
  link: string,
}

const projectsData: ProjectData[] = [
  {
    id: 0,
    title: 'Структурированный телефонный справочник',
    image: phones,
    description: `Проект структурированного телефонного справочника крупной организации. Главной проблемой телефонных справочников крупных предприятий я вляется то, что в поисковой выдаче данные не структурированы, а организационная структура очень ветвистая. Путем долгих раздумий и экспериментов, я разработал данный справочник.`,
    video: phoneBookVideo,
    tags: ['React','React Router','MST','Antd', 'Typescript', 'NestJs'],
    link: 'phonebook'
  },
  {
    id: 1,
    title: 'Сайт строительной фирмы',
    image: shtukatur,
    description: 'Самый первый реализованный мною проект. HTML, CSS, JavaScript, Bootstrap',
    video: shtukaturVideo,
    tags: ['JavaScript','HTML','CSS','Bootstrap'],
    link: 'shtukatur'
  },
  {
    id: 2,
    title: 'Сайт Versal',
    image: versal,
    description: 'В далеком 2018м году был реализован данный проект без фреймворков, сборщиком выступил Gulp. Дизайн проекта был выполнен в Figma',
    video:versalVideo,
    tags: ['JavaScript','HTML','SASS', 'Gulp'],
    link: 'versal'
  },
  {
    id: 3,
    title: 'Головоломка с механикой Blast',
    image: game,
    description: 'Мое первое близкое знакомство с технологией Canvas. Делал этот проект в качестве тестового задания в одну фирму в 2021м году. Использованы React и Сanvas',
    video: gameVideo,
    tags: ['React','Canvas','MobX'],
    link: 'game'
  },
  {
    id: 4,
    title: 'Контакты',
    image: contacts,
    description: <>Тестовое задание. Необходимо написать приложение личный кабинет.
    В приложении должно быть две страницы:
    Страница входа
    Страница со списком контактов
    Задание необходимо выполнить на TypeScript, без использования any и ts-ignore.
При выполнении работы обязательно использовать стейт менеджер (redux, mobx).  <a href='https://github.com/DmitriyPozdeev/takeoff-staff' target='_blank'>Исходный код</a></>
,
    video: contactsVideo,
    tags: ['React','MobX','AntD'],
    link: 'contacts'
  },
]

export default projectsData;