'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Button, Typography, Divider, message } from 'antd';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone, AppleFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        message.success('Inicio de sesión exitoso');
        router.push('/guias/diarias');
      } else {
        message.error('Correo o contraseña incorrectos');
      }
    } catch (error) {
      message.error('Ocurrió un error al iniciar sesión');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.loginBox}>
          <div className={styles.loginHeader}>
            <div className={styles.iconContainer}>
              <span className={styles.homeIcon}>🏠</span>
            </div>
            <Title level={2}>Welcome home</Title>
            <Text type="secondary">Please enter your details.</Text>
          </div>
          
          <div className={styles.formContainer}>
            <Input
              size="large"
              placeholder="Email"
              prefix={<MailOutlined className={styles.inputIcon} />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<LockOutlined className={styles.inputIcon} />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              onPressEnter={handleLogin}
            />
            
            <div className={styles.rememberContainer}>
              <Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)}>
                Remember for 30 days
              </Checkbox>
              <Button type="link" className={styles.forgotPassword}>Forgot password?</Button>
            </div>
            
            <Button 
              type="primary" 
              size="large" 
              block 
              className={styles.loginButton}
              onClick={handleLogin}
              loading={loading}
            >
              Login
            </Button>
            
            <Divider plain className={styles.divider}>or</Divider>
            
            <div className={styles.socialButtonsContainer}>
              <Button className={styles.socialButton} shape="circle" icon={<AppleFilled />} />
              <Button className={styles.socialButton} shape="circle">
                <Image src="/google.svg" alt="Google" width={16} height={16} />
              </Button>
              <Button className={styles.socialButton} shape="circle">
                <Image src="/facebook.svg" alt="Facebook" width={16} height={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className={styles.footer}>
          <div className={styles.copyright}>
            <Text type="secondary" className={styles.copyrightText}>
              Copyright ©2020 Produced by Ant Finance Experience Department
            </Text>
          </div>
          <div>
            <Text type="secondary">Ant Design Pro</Text>
            <QuestionCircleOutlined className={styles.helpIcon} />
          </div>
        </div>
      </div>
      
      <div className={styles.rightPanel}>
        {/* Fondo decorativo */}
      </div>
    </div>
  );
};

export default LoginPage; 