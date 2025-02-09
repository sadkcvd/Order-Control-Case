import { SettingOutlined, ShoppingOutlined, TeamOutlined, TruckOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider, } = Layout;

const LayoutSider = ({ collapsed }: { collapsed: boolean }) => {
    return (
        <Sider className='custom-layout-sider' theme='light' trigger={null} collapsible collapsed={collapsed}>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <ShoppingOutlined />,
                        label: 'Shop',
                    },
                    {
                        key: '2',
                        icon: <TruckOutlined />,
                        label: 'Transportation',
                    },
                    {
                        key: '3',
                        icon: <TeamOutlined />,
                        label: 'Peoples',
                    },
                    {
                        key: '4',
                        icon: <SettingOutlined />,
                        label: 'Settings',
                    },
                ]}
            />
        </Sider>
    )
}

export default LayoutSider;