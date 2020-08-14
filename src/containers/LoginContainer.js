import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';

const LoginContainer = () => {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const logValues = () => {
    console.log(userName)
    console.log(password)
  }

  return(
    <LoginComponent userName={userName} password={password} setUsername={setUsername} setPassword={setPassword} logValues={logValues}/>
  )
}

export default LoginContainer;