import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

export default function LogOut(){
   const {setUser,setToken} =useContext(userContext)
    const handleLogout = () => {
        const confirmLogout = window.confirm("Сигурни ли сте, че искате да излезете?");
    
        if (confirmLogout) {
          // Изчистване на токена и потребителските данни
          setToken("");
          setUser("");
    
          // Изчистване на токена от localStorage
          localStorage.removeItem("token");
        }
      };
}