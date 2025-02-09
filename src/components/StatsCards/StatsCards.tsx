import { Card, Row, Col, Dropdown, Space, MenuProps, Spin } from "antd";
import { DownOutlined, LoadingOutlined } from '@ant-design/icons';
import { HeaderStatsType } from "../../types/types";
import { statCardNames } from "../../helpers/constants";

const items: MenuProps['items'] = [
    {
        label: "Hafta",
        key: '0',
    },
    {
        label: "Ay",
        key: '1',
    },
    {
        label: "Yıl",
        key: '3',
    },
];

const StatsCards = ({ headerStatsInfo }: { headerStatsInfo: HeaderStatsType | null }) => {
    return (
        <>
            <div className="stat-cards-filter">
                <Dropdown menu={{ items }} trigger={['click']}>
                    <Space>
                        <h5>Bugün</h5>
                        <DownOutlined />
                    </Space>
                </Dropdown>
            </div>
            <Row gutter={[20, 20]} className="stat-cards">
                {!headerStatsInfo
                    ?
                    <Spin indicator={<LoadingOutlined spin />} size="default" />
                    :
                    Object.keys(headerStatsInfo).map((statKey, index) => (
                        <Col span={6} lg={4} md={8} sm={12} xs={24} key={index} >
                            <Card className={`stat-card ${index % 2 === 0 ? "bg-blue" : "bg-gray"}`}>
                                <h3>{statCardNames[statKey as keyof HeaderStatsType]}</h3>
                                <h2>{headerStatsInfo[statKey as keyof HeaderStatsType]}</h2>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default StatsCards;
