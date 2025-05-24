import React from 'react';
import { Card, Button, DatePicker, Space, Breadcrumb, Typography, Row, Col, Tooltip, Input } from 'antd';
import { PlusOutlined, CheckCircleOutlined } from '@ant-design/icons';
import GuidesTable from './GuidesTable';
import Link from 'next/link';

const { Title } = Typography;

const GuidesDailyPage: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Breadcrumb 
            items={[
              { title: <Link href="/guias">Guías</Link> },
              { title: 'Guías Diarias' }
            ]}
          />
        </Col>
      </Row>
      
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card>
            <Row gutter={[16, 16]} justify="space-between" align="middle" style={{ marginBottom: 16 }}>
              <Col>
                <Title level={4} style={{ margin: 0 }}>Lista de Guías</Title>
              </Col>
              <Col>
                <Space>
                  <Tooltip title="Enviar a Sunat">
                    <Button 
                      icon={<CheckCircleOutlined />} 
                      type="primary" 
                      style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
                    >
                      Enviar a Sunat
                    </Button>
                  </Tooltip>
                  <DatePicker placeholder="Seleccione fecha" />
                </Space>
              </Col>
            </Row>
            
            <Row gutter={[16, 16]} justify="space-between" align="middle" style={{ marginBottom: 16 }}>
              <Col>
                <Space>
                  <Typography.Text>Peso:</Typography.Text>
                  <Input value="10000 kg" readOnly style={{ width: 120 }} />
                </Space>
              </Col>
              <Col>
                <Button type="primary" icon={<PlusOutlined />}>
                  Emitir Guía
                </Button>
              </Col>
            </Row>
            
            <GuidesTable />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GuidesDailyPage; 