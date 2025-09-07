import React, { useState } from 'react';
import { Checkbox, Form, Image, Input } from 'antd';

import './Login.scss'
import CustomInput from '../../components/common/CustomInput/CustomInput';
import Button from '@/components/common/Button/Button';
import SocialButton from './SocialButton/SocialButton';
import { login } from '../../apis/authentication';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async ({ username, password }) => {
    try {
      const response = await login({ username, password })
      const token = response.data.token
      if (token) {
        localStorage.setItem("accessToken", token)
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <div className="login-wrapper">
      <div className="image-wrapper">
        <Image height="100%" preview={false} src="https://shop.winezone.vn/wp-content/uploads/2024/11/ruou-vang-tieng-anh-la-gi-2.jpg" />
      </div>
      <div className="form-wrapper">

        <form className="form-section" onSubmit={(e) => {
          e.preventDefault();
          handleLogin({username, password})
        }}>
          <h1 className='login-title'>Đăng nhập</h1>
          <div className="form-input">

            <CustomInput
              name={'username'} 
              type={'text'}
              placeholder={'Tài khoản'}
              width={400}
              onChange={(e) => setUsername(e.target.value)}
            />
            <CustomInput
              name={'password'}
              type={'password'}
              placeholder={'Mật khẩu'}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            content='Đăng nhập'
            width={170}
            height={55}
            buttonType={'primary'}
            // onClick={() => handleLogin({ username, password })}
          />
        </form>

        <div className="alternative-label">
          <hr className='dashed-line' />
          <label className='label-text' >hoặc đăng nhập với</label>
          <hr className='dashed-line' />
        </div>
        <div className="social-login">
          <SocialButton
            label='Google'
            icon='devicon:google'
            type='google'
          />
          <SocialButton
            label='Facebook'
            icon='logos:facebook'
            type='facebook'
          />
        </div>
      </div>
    </div>
  )

};
export default Login;