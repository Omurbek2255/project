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

  const handleLogin = () => {
    const errMsg = login(credentials.username, credentials.password)

    if (errMsg) {
      alert(errMsg)
      return;
    } else{
      navigate('/')
      setAuthActive(true)
      console.log(authActive); 
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