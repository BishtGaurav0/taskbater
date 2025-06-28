import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const { Header: AntHeader } = Layout;

const Header = () => {
  const { token, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Define menu items shown when logged in
  const loggedInMenu = [
    { key: 'dashboard', label: <Link to="/dashboard">Dashboard</Link> },
    { key: 'tasks', label: <Link to="/tasks">Tasks</Link> },
    { key: 'create-task', label: <Link to="/create-task">Create Task</Link> },
  ];

  return (
    <AntHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
        <Link to="/" style={{ color: 'white' }}>TaskBater</Link>
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname.split('/')[1] || 'dashboard']}
        items={token ? loggedInMenu : []}
        style={{ flex: 1, marginLeft: '20px' }}
      />

      <div>
        {token ? (
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Button style={{ marginRight: 10 }} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button type="primary" onClick={() => navigate('/register')}>
              Register
            </Button>
          </>
        )}
      </div>
    </AntHeader>
  );
};

export default Header;
