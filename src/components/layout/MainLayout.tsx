import React from 'react';
import { Layout, Avatar, Badge, Space, Button } from 'antd';
import { BellOutlined, QuestionCircleOutlined, TranslationOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
            <Space>
              <Avatar style={{ backgroundColor: '#1677ff' }}>RB</Avatar>
              <span>Romer Bolaños</span>
            </Space>
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