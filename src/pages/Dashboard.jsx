import { Button, Card, Typography } from 'antd';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { LogoutOutlined, SmileOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5' }}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          style={{ width: 400, textAlign: 'center', padding: '1rem' }}
          bordered={false}
          hoverable
        >
          <SmileOutlined style={{ fontSize: 40, color: '#52c41a' }} />
          <Title level={2} style={{ marginTop: '1rem' }}>Dashboard</Title>
          <Paragraph>Welcome to your dashboard!</Paragraph>

          <Paragraph>
            TaskBater helps you connect with others to share tasks and skills efficiently.  
            Post tasks you want help with, offer your skills in exchange, and chat with users to collaborate and build your reputation.
          </Paragraph>

          <Button
            type="primary"
            danger
            icon={<LogoutOutlined />}
            onClick={logout}
          >
            Logout
          </Button>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;
