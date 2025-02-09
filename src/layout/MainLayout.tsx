import React, { useState } from 'react';
import { Layout } from 'antd';
import LayoutSider from './LayoutComponents/LayoutSider';
import LayoutContent from './LayoutComponents/LayoutContent';
import LayoutHeader from './LayoutComponents/LayoutHeader';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <>
            <Layout>
                <LayoutSider collapsed={collapsed} />
                <Layout>
                    <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />
                    <LayoutContent>{children}</LayoutContent>
                </Layout>
            </Layout>
        </>
    );
};

export default MainLayout;
