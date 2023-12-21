import NotFound from "./components/404";
import Navigation from "./components/Navigation";
import Login from "./components/usersComponents/Login";
import Moves from "./components/usersComponents/Moves";
import Profile from "./components/usersComponents/Profile";
import Registration from "./components/usersComponents/Registration";
import Stat from "./components/usersComponents/Stat";


function App() {
  

  return (
    <div id="page">
   <Navigation />
   <Registration />
   <Login />
   <Moves />
   <Profile />
   <Stat />
   <NotFound />
   </div>
  )
    
  
}

export default App
