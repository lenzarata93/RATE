import styles from '../components/Navigation.module.css'
function Navigation(){
    return( <nav>
        <ul>
          <li><a href="/">Начало</a></li>
          <li><a href="/registration">Регистрация</a></li>
          <li><a href="/login">Вход</a></li>
          <li><a href="/logout">Изход</a></li>
          <li><a href="/moves">Движения</a></li>
          <li><a href="/myProfile">Моят профил</a></li>
          <li><a href="/myStat">Моята статистика</a></li>
        </ul>
      </nav>
    );
}
export default Navigation;