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
  const [error, setError] = useState()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  } 

  const handleRegister = () => {
    const errMsg = register(userData)
    if (errMsg) {
      setError(errMsg)
    }
    navigate('/login')
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