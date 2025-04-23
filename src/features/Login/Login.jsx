import { Button, Input } from "antd";
import { useState } from "react";
import { useAuthStore } from "../Store";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const { login } = useAuthStore()
  const [authActive , setAuthActive] = useState(false)
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
  console.log(storedUsers);

  const handleLogin = () => {
    const passTest = storedUsers.some(user => user.password === credentials.password)
    const usernameTest = storedUsers.some(user => user.username === credentials.username)
    
    
    

    if (usernameTest && passTest){
      login(credentials.username, credentials.password)
      navigate('/')
      setAuthActive(true)
      alert('Вы вошли в аккаунт!')

    } else{
      alert('Пароль или логин не правельный!')
    } 
  }
  return (
    <div className="log-block">
      <h2>Вход</h2>
      <Input  className="log-block-inp" onChange={handleChange} name="username" placeholder="Логин" />
      <Input.Password  className="log-block-inp" onChange={handleChange} name="password" placeholder="Пароль" />
      <Button  className="log-block-btn" onClick={handleLogin}>Войти</Button>
    </div>
  )
}
export default Login;