import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  FileOutlined,
  SendOutlined,
  BarChartOutlined,
  UserOutlined,
  LockOutlined,
  TeamOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <Link href="/dashboard">Dashboard</Link>,
    },
    {
      key: '/guias',
      icon: <FileOutlined />,
      label: <Link href="/guias">Guías</Link>,
      children: [
        {
          key: '/guias/diarias',
          label: <Link href="/guias/diarias">Guías Diarias</Link>,
        },
        {
          key: '/guias/todas',
          label: <Link href="/guias/todas">Todas las Guías</Link>,
        },
      ],
    },
    {
      key: '/salidas',
      icon: <SendOutlined />,
      label: <Link href="/salidas">Salidas</Link>,
    },
    {
      key: '/reportes',
      icon: <BarChartOutlined />,
      label: <Link href="/reportes">Reportes</Link>,
    },
    {
      key: '/clientes',
      icon: <UserOutlined />,
      label: <Link href="/clientes">Clientes</Link>,
    },
    {
      key: '/roles',
      icon: <LockOutlined />,
      label: <Link href="/roles">Roles /Permisos</Link>,
    },
    {
      key: '/usuarios',
      icon: <TeamOutlined />,
      label: <Link href="/usuarios">Usuarios</Link>,
    },
  ];

  return (
    <Sider 
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
      style={{ minHeight: '100vh' }}
    >
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'white', fontWeight: 'bold' }}>Exodo - Traking</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={['/guias']}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar; 