import React from 'react';
import { Layout, Avatar, Badge, Space, Button, Dropdown } from 'antd';
import { BellOutlined, QuestionCircleOutlined, TranslationOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';
import { useAuth } from '@/context/AuthContext';

const { Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();

  const userMenuItems = [
    {
      key: 'profile',
      label: 'Perfil',
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: 'Cerrar sesión',
      icon: <LogoutOutlined />,
      onClick: logout,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: '0 16px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Space size="middle">
            <Badge count={11} size="small">
              <Button type="text" icon={<BellOutlined />} />
            </Badge>
            <Button type="text" icon={<QuestionCircleOutlined />} />
            <Button type="text" icon={<TranslationOutlined />} />
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <Space style={{ cursor: 'pointer' }}>
                <Avatar style={{ backgroundColor: '#1677ff' }}>RB</Avatar>
                <span>{user?.email || 'Usuario'}</span>
              </Space>
            </Dropdown>
          </Space>
        </Header>
        <Content style={{ margin: '16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 