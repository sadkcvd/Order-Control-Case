import { Layout, theme } from 'antd';

const { Content } = Layout;

const LayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
    return (
        <Content
            style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            <div className='container'>
                {children}
            </div>
        </Content>
    )
}

export default LayoutContent