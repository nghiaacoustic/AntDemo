import React, { useRef, useState } from 'react'

const UseRef = () => {

  let inputUserName = useRef(null)
  let inputPassword = useRef(null)

  let userName = useRef('')

  let [userLogin, setUserLogin] = useState({ userName: '' });

  const handleLogin = () => {
    // let { name, value } = inputUserName.current;
    console.log('userName', userName)
    console.log('userLogin', userLogin.userName)
    userName.current = '123';
    setUserLogin({ userName: userName.current })
  }


  return (
    <div>
      <h3>login</h3>
      <div>
        <h3>username</h3>
        <input ref={inputUserName} name='username' style={{ background: 'rgb(185 183 152)', color: '#fff' }} />
      </div>
      <div>
        <h3>password</h3>
        <input ref={inputPassword} name='password' style={{ background: 'rgb(185 183 152)', color: '#fff' }} />
      </div>
      <div>
        <button onClick={() => { handleLogin() }}>Login</button>
      </div>
    </div>
  )
}

export default UseRef
