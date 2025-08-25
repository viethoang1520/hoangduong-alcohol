import React, { useState } from 'react';
import { Button, Checkbox, Form, Image, Input } from 'antd';
import axios from 'axios'
import './Login.scss'
import CustomInput from '../../components/CustomInput/CustomInput';
import { use } from 'react';
const onFinish = (values) => {
  // console.log('Success:', values);
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
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

const Login = () => (
  <div className="login-wrapper">
    <div className="image-wrapper">
      <Image height="100%" preview={false} src="https://shop.winezone.vn/wp-content/uploads/2024/11/ruou-vang-tieng-anh-la-gi-2.jpg" />
    </div>
    <div className="form-section">
      <h1 className='login-title'>Đăng nhập</h1>
      <div className="form-input">

        <CustomInput
          name={'Username'}
          type={'text'}
          placeholder={'Username'}
          width={400}
          
        // value={username}
        // onChange={() => setUsername(username)}
        />
        <CustomInput
          name={'Password'}
          type={'password'}
          placeholder={'Password'}
        // value={password}
        // onChange={() => setPassword(password)}
        />
      </div>
      {/* <Form 
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          margin: '200px auto',
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
    </div>
  </div>
);
export default Login;