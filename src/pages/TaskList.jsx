import { useEffect, useState } from 'react';
import { Card, Typography, Row, Col, message, Spin } from 'antd';
import API from '../api/axios';

const { Title, Paragraph, Text } = Typography;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/api/tasks')
      .then(res => setTasks(res.data))
      .catch(() => message.error("Failed to load tasks"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Available Tasks</Title>

      {loading ? (
        <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />
      ) : (
        <Row gutter={[16, 16]}>
          {tasks.map(task => (
            <Col xs={24} sm={12} md={8} lg={6} key={task._id}>
              <Card
                title={task.title}
                bordered
                hoverable
                style={{ height: '100%' }}
              >
                <Paragraph>{task.description}</Paragraph>
                <Text type="secondary">Skill Offered: {task.skillOffered}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default TaskList;
