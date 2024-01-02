import {Route, Routes} from 'react-router-dom';


import NotFound from "./components/404";
import Navigation from "./components/Navigation";
import Login from "./components/usersComponents/Login";
import Moves from "./components/usersComponents/Moves";
import Profile from "./components/usersComponents/Profile";
import Registration from "./components/usersComponents/Registration";
import Stat from "./components/usersComponents/Stat";
import Home from './components/usersComponents/Home';
import LogOut from './components/usersComponents/LogOut';


function App() {
  

  return (
    <div id="page">
   <Navigation />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route  path='/registration' element={<Registration />} />
    <Route path='/login' element={<Login />} />
    <Route path='/logout' element ={<LogOut />}/>
    <Route path='/moves' element={ <Moves />} />
    <Route path='/myProfile' element ={<Profile />} />
    <Route path='/myStat' element ={ <Stat />} />
    <Route path='/404' element ={ <NotFound />} />
   </Routes>
   
   </div>
  )
    
  
}

export default App
