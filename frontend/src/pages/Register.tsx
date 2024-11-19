import React from 'react';
import { Form, Input, Button, Card, Divider } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { GoogleLogin } from '@react-oauth/google';

const Register: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Register Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Register Failed:', errorInfo);
  };

  const handleGoogleRegisterSuccess = (credentialResponse: any) => {
    console.log('Google Register Success:', credentialResponse);
  };

  const handleGoogleRegisterFailure = () => {
    console.error('Google Register Failed');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <Card style={{ width: 400 }}>
        <h2 style={{ textAlign: 'center' }}>Register</h2>
        <Form
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>

        <Divider>OR</Divider>

        <GoogleLogin
          onSuccess={handleGoogleRegisterSuccess}
          onError={handleGoogleRegisterFailure}
          text="continue_with"
          width="100%"
        />

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <a href="/">Already have an account? Log in now!</a>
        </div>
      </Card>
    </div>
  );
};

export default Register;
