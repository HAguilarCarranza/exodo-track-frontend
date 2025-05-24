import React from 'react';
import { Table, Tag, Button, Space, Checkbox } from 'antd';
import type { TableProps } from 'antd';

interface GuideData {
  key: string;
  codigo: string;
  guia: string;
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  monto: number;
  peso: number;
  sunat: string;
  estado: 'enviado' | 'pendiente' | 'error' | 'online' | 'enviando';
}

const GuidesTable: React.FC = () => {
  const data: GuideData[] = [
    {
      key: '1',
      codigo: 'UDAA6F',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Lima',
      destino: 'Lima',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'enviado',
    },
    {
      key: '2',
      codigo: 'UD6RF',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'pendiente',
    },
    {
      key: '3',
      codigo: 'SRDF5',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'error',
    },
    {
      key: '4',
      codigo: 'HBRS2',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'online',
    },
    {
      key: '5',
      codigo: 'HRS1X',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'enviando',
    },
    {
      key: '6',
      codigo: 'ARS4G',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'enviando',
    },
    {
      key: '7',
      codigo: 'HRT5O',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'error',
    },
    {
      key: '8',
      codigo: 'KHRH3',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'pendiente',
    },
    {
      key: '9',
      codigo: 'YURO1',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'pendiente',
    },
    {
      key: '10',
      codigo: 'PRIHL',
      guia: '001-202',
      remitente: 'Romer Bolaños Atalaya',
      destinatario: 'Romer Bolaños Atalaya',
      origen: 'Huamachuco',
      destino: 'Huamachuco',
      monto: 21.25,
      peso: 21.25,
      sunat: '',
      estado: 'error',
    },
  ];

  const columns: TableProps<GuideData>['columns'] = [
    {
      title: '',
      key: 'selection',
      width: 40,
      render: () => <Checkbox />,
    },
    {
      title: 'Código',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
      title: 'N° Guía',
      dataIndex: 'guia',
      key: 'guia',
    },
    {
      title: 'Remitente',
      dataIndex: 'remitente',
      key: 'remitente',
    },
    {
      title: 'Destinatario',
      dataIndex: 'destinatario',
      key: 'destinatario',
    },
    {
      title: 'Origen',
      dataIndex: 'origen',
      key: 'origen',
    },
    {
      title: 'Destino',
      dataIndex: 'destino',
      key: 'destino',
    },
    {
      title: 'Monto s/.',
      dataIndex: 'monto',
      key: 'monto',
    },
    {
      title: 'Peso',
      dataIndex: 'peso',
      key: 'peso',
    },
    {
      title: 'Sunat',
      dataIndex: 'sunat',
      key: 'sunat',
    },
    {
      title: 'Acción',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button type="link" size="small">Config</Button>
          <Button type="link" size="small">Ver</Button>
        </Space>
      ),
    },
    {
      title: 'Estado',
      key: 'estado',
      dataIndex: 'estado',
      render: (estado: string) => {
        let color = 'green';
        let dot = '•';
        
        if (estado === 'pendiente') {
          color = 'gray';
        } else if (estado === 'error') {
          color = 'red';
        } else if (estado === 'online') {
          color = 'green';
        } else if (estado === 'enviando') {
          color = 'blue';
        }
        
        return (
          <Tag color={color} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '16px' }}>{dot}</span>
            <span>
              {estado === 'enviado' && 'Enviado'}
              {estado === 'pendiente' && 'Pendiente'}
              {estado === 'error' && 'Error'}
              {estado === 'online' && 'Online'}
              {estado === 'enviando' && 'Enviando'}
            </span>
          </Tag>
        );
      },
    },
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={data}
      pagination={{
        total: data.length,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total) => `${total}/page`,
      }}
      size="middle"
      bordered
    />
  );
};

export default GuidesTable; 