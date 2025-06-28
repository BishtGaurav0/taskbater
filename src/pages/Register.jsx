import { useState } from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import { UserAddOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';

const { Title, Text } = Typography;

const Register = () => {
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await registerUser(values);
      message.success('✅ Registration successful!');
      setRegistered(true);
    } catch (err) {
      message.error('❌ Registration failed. Please try again.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '90vh',
      background: '#f0f2f5',
      padding: '2rem',
    }}>
      <Card
        style={{ maxWidth: 400, width: '100%' }}
        bordered
        hoverable
      >
        {!registered ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <UserAddOutlined style={{ fontSize: 36, color: '#1890ff' }} />
              <Title level={3} style={{ marginTop: '0.5rem' }}>Create Account</Title>
            </div>

            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please enter your username' }]}
              >
                <Input placeholder="Enter username" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="Enter email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password placeholder="Enter password" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block icon={<UserAddOutlined />}>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Text type="success" style={{ fontSize: 16 }}>
              ✅ You have registered successfully!
            </Text>
            <br />
            <Button
              type="primary"
              icon={<LoginOutlined />}
              style={{ marginTop: 20 }}
              onClick={() => navigate('/login')}
            >
              Go to Login
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Register;
