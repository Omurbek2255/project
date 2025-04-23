import { Button, Input } from "antd";
import { useState } from "react";
import { useAuthStore } from "../Store";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register = () => {

  const { register } = useAuthStore()

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  })                


  const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')

  console.log(storedUsers);
  
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  } 

  const handleRegister = () => {
    const regExp = /^[a-z0-9.]+@gmail.com$/;
    const usernameExp = /^@[a-zA-Z0-9_]{3,15}$/;

    const regTest = storedUsers.some(user => user.email === userData.email)
    const usernameTest = storedUsers.some(user => user.username === userData.username)

    if (!regTest) {
      if (!usernameTest) {
        if(regExp.test(userData.email)){
          if (usernameExp.test(userData.username)) {
            register(userData)
            navigate('/login')
            alert('Регистрация прошла успешно')
          } else{
            alert('Напишите username правельным образом')
          }
        } else {
            alert('напишите email правельным образом')
        }


      } else if (usernameTest){
        alert('Пользователь с таким username уже существует')
      }
    } else if (regTest) {
       alert('Пользователь с такими email уже существует')
    }
    

    
  }  

  return (
    <div className="reg-block">
      <div className="reg-form">
        <h2>Регистрация</h2>
        <Input className="reg-inp" onChange={handleChange} name="username" placeholder="введите имя пользователя" />
        <Input className="reg-inp"  onChange={handleChange} name="email" placeholder="введите вашу почту" />
        <Input.Password className="reg-inp"  onChange={handleChange} name="password" placeholder="Введите пароль" />
        <Button className="reg-inp" onClick={handleRegister}>Зарегистрироваться</Button>
      </div>
    </div>
  )
}

export default Register;