import Navigation from "./components/Navigation";
import Login from "./components/usersComponents/Login";
import Moves from "./components/usersComponents/Moves";
import Registration from "./components/usersComponents/Registration";


function App() {
  

  return (
    <div id="page">
   <Navigation />
   <Registration />
   <Login />
   <Moves />
   </div>
  )
    
  
}

export default App
