import React from 'react';
import { Form, Input, Button, Checkbox, Card, Divider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { GoogleLogin } from '@react-oauth/google';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Login Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Login Failed:', errorInfo);
  };

  const handleGoogleLoginSuccess = (credentialResponse: any) => {
    console.log('Google Login Success:', credentialResponse);
  };

  const handleGoogleLoginFailure = () => {
    console.error('Google Login Failed');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: 400 }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
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
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>

        <Divider>OR</Divider>

        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
          text="continue_with"
          width="100%"
        />

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <a href="/register">Don't have an account? Register now!</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
