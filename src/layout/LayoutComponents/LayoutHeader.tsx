import { Button, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, StarOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Profile from '../../components/Profile/Profile';

const { Header } = Layout;

interface LayoutHeaderProps {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutHeader = ({ collapsed, setCollapsed }: LayoutHeaderProps) => {
    const { token: { colorBgContainer } } = theme.useToken();
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className='left'>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
                <div className='sub-title'>
                    <StarOutlined />
                    <h5>Sipariş Kontrol Ekranı</h5>
                </div>
            </div>
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <div className="profile">
                <Profile />
            </div>
        </Header>
    )
}

export default LayoutHeader
