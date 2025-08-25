import React, { useState } from 'react';
import { Checkbox, Form, Image, Input } from 'antd';

import axios from 'axios'
import './Login.scss'
import CustomInput from '../../components/CustomInput/CustomInput';
import { use } from 'react';
import Button from '@/components/common/Button/Button';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onFinish = (values) => {
    axios.post('http://localhost:3000/auth/login', {
      email: values.email,
      password: values.password,
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-wrapper">
      <div className="image-wrapper">
        <Image height="100%" preview={false} src="https://shop.winezone.vn/wp-content/uploads/2024/11/ruou-vang-tieng-anh-la-gi-2.jpg" />
      </div>
      <form className="form-section">
        <h1 className='login-title'>Đăng nhập</h1>
        <div className="form-input">

          <CustomInput
            name={'username'}
            type={'text'}
            placeholder={'Username'}
            width={400}
            onChange={(e) => setUsername(e.target.value)}
          />
          <CustomInput
            name={'password'}
            type={'password'}
            placeholder={'Password'}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <Button
          content='Đăng nhập'
          width={170}
          height={55}
          buttonType={'primary'}
          onClick={onFinish}
        />
      </form>
    </div>
  )

};
export default Login;