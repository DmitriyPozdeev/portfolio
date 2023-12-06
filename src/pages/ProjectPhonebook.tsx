import {FC} from 'react'
import screen2 from '../assets/new_phonebook_1.jpg'
import screen3 from '../assets/new_phonebook_2.jpg'
import screen4 from '../assets/new_phonebook_3.jpg'
import screen5 from '../assets/new_phonebook_4.jpg'
import screen8 from '../assets/new_phonebook_5.jpg'
import screen6 from '../assets/old_phonebook.jpg'
import screen7 from '../assets/old_phonebook_1.jpg'
import Screen from '../components/screen/Screen'
import SubTitle from '../components/subTitle/SubTitle'

const ProjectPhonebook: FC = () => {
  return (
    <div className='read-the-docs'>
      <SubTitle title='СТРУКТУРИРОВАННЫЙ ТЕЛЕФОНННЫЙ СПРАВОЧНИК'/>
      <p >
        Пока самая интересная часть,
        разрабатываемого мной, нового сайта отдела связи.
        Поиск на старом сайте не отличается гибкостью и наглядностью. 
        Сайт был разработан в 2002 году и с тех пор не изменялся. 
        Главной задачей телефонного справочника является поиск абонентов. 
        Старый справочник справляется с этой задачей, но есть одна большая проблема. 
        Подразделений стало очень много и они стали иметь большую вложенность. К тому же названия подразделений 
        не уникальны. 
        В старом справочнике при поиске в результирующих строках указывалось лишь последнее подразделение 
        в иерархии и не всегда ясно, где оно находится. 
      </p>
      <Screen image={screen6}/>
      <p>
        
        Можно было решить проблему указав всю иерархию подразделений для каждого абонента,
        примерно так:
      </p>
      <Screen image={screen7}/>
      <p>
        Но мне эта идея не понравилась из-за плохой наглядности. Я решил пойти дальше 
        и представить данные в древовидной структуре. Результат поиска отображается в виде вложенных друг в друга раскрывающихся списков 
      с таблицами абонентов.
      </p>
      <Screen image={screen3}/>
      <Screen image={screen2}/>

      <p>
        В левой части находится древовидный фильтр c подразделениями. 
        В результат поиска входят все абоненты и подразделения ниже выбранного и соответвующие
        строке поиска.  Сам фильтр тоже можно офильтровать. 
      </p>
      <Screen image={screen5}/>
      <Screen image={screen4}/>
      <p>
        Авторизованные пользователи, имеющие право доступа к данным станции, могут посмотреть эти данные
      </p>
      <Screen image={screen8}/>
    </div>
  )
}
export default ProjectPhonebook