import styles from '../components/Navigation.module.css';

import { Link} from 'react-router-dom';
function Navigation(){
    return( <nav>
        <ul>
          <li><Link to="/">Начало</Link></li>
          <li><Link to ="/registration">Регистрация</Link></li>
          <li><Link to="/login">Вход</Link></li>
          <li><Link to="/logout">Изход</Link></li>
          <li><Link to="/moves">Движения</Link></li>
          <li><Link to="/myProfile">Моят профил</Link></li>
          <li><Link to="/myStat">Моята статистика</Link></li>
        </ul>
      </nav>
    );
}
export default Navigation;