import styles from '../components/Navigation.module.css'
function Navigation(){
    return( <nav>
        <ul>
          <li><a href="#">Начало</a></li>
          <li><a href="#">Регистрация</a></li>
          <li><a href="#">Вход</a></li>
          <li><a href="#">Изход</a></li>
          <li><a href="#">Движения</a></li>
          <li><a href="#">Моят профил</a></li>
          <li><a href="#">Моята статистика</a></li>
        </ul>
      </nav>
    );
}
export default Navigation;