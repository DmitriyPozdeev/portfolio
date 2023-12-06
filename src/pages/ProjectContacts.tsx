import {FC} from 'react'
import Video from '../components/video/Video'
import contactsVideo from '../assets/contacts.mp4'
import SubTitle from '../components/subTitle/SubTitle'
const ProjectContacts: FC = () => {
  return (
      <div style={{padding: '20px'}}>
        <SubTitle title='КОНТАКТЫ'/>
        <Video video={contactsVideo}/>
        <p>
          Необходимо написать приложение личный кабинет.
          В приложении должно быть две страницы:
          Страница входа
          Страница со списком контактов
          Оформление и данные для заполнения страниц на усмотрение кандидата.
          Обязательно наличие информации в readme о том, как запускать приложение. Так же необходимо указать версию node (узнать можно с помощью команды node -v)
          Для выполнения тестового задания Вы можете использовать UI-библиотеку компонентов (MUI, antd и т.д.).
          Задание необходимо выполнить на TypeScript, без использования any и ts-ignore.
          При выполнении работы обязательно использовать стейт менеджер (redux, mobx)
          Страница входа
          Для реализации авторизации можно использовать запросы с моковыми данными https://github.com/typicode/json-server.
        </p>
        <p>
          Страница со списком контактов
        </p>
        <p>
          Страница со списком контактов пользователя должна быть доступна только после авторизации.
          На странице со списком контактов должна быть возможность добавлять/удалять/редактировать контакты, а также желательно наличие функции поиска.
        </p>
        <a href='https://github.com/DmitriyPozdeev/takeoff-staff' target='_blank'>
          github
        </a>
    </div>
  )
}
export default ProjectContacts