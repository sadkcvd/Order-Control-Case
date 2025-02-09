import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        label: "Profil",
        key: '0',
    },
    {
        label: "Yönetim Paneli",
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: "Ayarlar",
        key: '3',
    },
];

const Profile: React.FC = () => (
    <Dropdown menu={{ items }} trigger={['click']}>
        <Space>
            <div className='profile-icon'><UserOutlined /></div>
            <h5>Sadık Çavdar</h5>
            <div className='down-icon'><DownOutlined /></div>
        </Space>
    </Dropdown>
);

export default Profile;