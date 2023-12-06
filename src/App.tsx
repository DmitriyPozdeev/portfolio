import { useEffect } from 'react'
import './App.css'
import  Header from './components/header/Header'
// import SubTitle from './components/subTitle/SubTitle'
// import ProjectList from './components/projectList/ProjectList'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Menu from './components/menu/Menu';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname)
  useEffect(() => {
    window.scrollTo(0, 0);
    if(location.pathname === '/') {
      navigate('/about')
    }
  }, [location])

  return (
    <div style={{position: 'relative'}}>
      <Menu location={location.pathname}/>
      <Header location={location.pathname}/>
      <Outlet/>
    </div>
  )
}

export default App
