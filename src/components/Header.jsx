import {useAuthStore} from '../features/Store.js'
import { useNavigate } from "react-router-dom"
import style from "./header.module.css"

const Header = () =>{

    const logout = useAuthStore((state) => state.logout)
    console.log(logout);
    
    const navigate = useNavigate()

    const handleLogout = () =>{
        logout()
        navigate('/register')
    }

    return(
        <div className={style.head}>
            <div className="head-logo">
                <h1>LOGO</h1>
            </div>
            <div className="head-menu">
                <ul>
                    <li><a href="">Главная</a></li>
                    <li><a href="">О нас</a></li>
                    <li><a href="">Каталог</a></li>
                </ul>
            </div>
            <div className="head-auth">
                <button className={style.btn} onClick={handleLogout}>Выйти</button>
            </div>
        </div>


    )
}


export default Header