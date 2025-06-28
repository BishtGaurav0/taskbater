import React from 'react';
import { Form, Input, Button, message, Typography } from 'antd';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';

const { Title } = Typography;

const CreateTask = () => {
  const { token } = useAuth();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await API.post(
        '/api/tasks',
        {
          ...values,
          tags: values.tags.split(',').map((tag) => tag.trim()),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      message.success('Task created successfully!');
      form.resetFields();
    } catch (err) {
      message.error('Failed to create task. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0px auto' }}>
      <Title level={2} style={{ textAlign: 'center' }}>
        Create Task
      </Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          title: '',
          description: '',
          tags: '',
          skillOffered: '',
        }}
      >
        <Form.Item
          label={<span style={{ fontSize: '16px', fontWeight: '500' }}>Title</span>}
          name="title"
          rules={[{ required: true, message: 'Please input the task title!' }]}
        >
          <Input placeholder="Enter task title" />
        </Form.Item>

        <Form.Item
          label={<span style={{ fontSize: '16px', fontWeight: '500' }}>Description</span>}
          name="description"
          rules={[{ required: true, message: 'Please input the task description!' }]}
        >
          <Input.TextArea rows={4} placeholder="Enter task description" />
        </Form.Item>

        <Form.Item
          label={<span style={{ fontSize: '16px', fontWeight: '500' }}>Tags</span>}
          name="tags"
          tooltip="Separate tags with commas (e.g. web, frontend, css)"
          rules={[{ required: true, message: 'Please input at least one tag!' }]}
        >
          <Input placeholder="e.g. web, frontend, css" />
        </Form.Item>

        <Form.Item
          label={<span style={{ fontSize: '16px', fontWeight: '500' }}>Skill You Offer</span>}
          name="skillOffered"
          rules={[{ required: true, message: 'Please specify the skill you offer!' }]}
        >
          <Input placeholder="e.g. blog writing" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Post Task
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTask;
