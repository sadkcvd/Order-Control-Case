import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDataById } from "../api/service";
import { ColumnsType, Order } from "../types/types";
import { Card, Spin } from "antd";
import MainLayout from "../layout/MainLayout";
import Table from "../components/Table/Table";
import dayjs from "dayjs";

const Detail = () => {
    const { orderNo } = useParams<{ orderNo: string }>();
    const [order, setOrder] = useState<Order[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getOrder = async () => {
        if (orderNo) {
            const data = await fetchDataById(Number(orderNo));
            setOrder(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        getOrder();
    }, [orderNo]);

    const columns: ColumnsType<any> = [
        { title: "Sipariş No", dataIndex: "orderNo", key: "orderNo" },
        { title: "Gönderi Takip No", dataIndex: "shipmentTrackingNo", key: "shipmentTrackingNo" },
        { title: "Sipariş Takip No", dataIndex: "orderTrackingNo", key: "orderTrackingNo" },
        { title: "Müşteri Ad/Soyad", dataIndex: "customerName", key: "customerName" },
        { title: "İlçe", dataIndex: "district", key: "district" },
        { title: "Plaka", dataIndex: "plate", key: "plate" },
        { title: "Dağıtıma Çıkarıldı", dataIndex: "releasedForDistribution", key: "releasedForDistribution" },
        { title: "Durum", dataIndex: "Statu", key: "Statu", render: (statu: number) => ["Oluşturuldu", "İptal Edildi", "Teslim Edildi", "Bekliyor", "Teslim Edilemedi"][statu], },
        { title: "Tarih", dataIndex: "Date", key: "Date", render: (Date: string) => dayjs(Date).format("YYYY.MM.DD HH:mm") },
    ];

    if (loading) {
        return <Spin />;
    }

    if (!order) {
        return <h1>Sipariş bulunamadı.</h1>;
    }

    return (
        <MainLayout>
            <Card title={`Sipariş Detay | No:${order[0].orderNo}`}>
                <Table
                    columns={columns}
                    tableData={order}
                    showSizeChanger={false}
                />
                <Link to="/home">Geri Dön</Link>
            </Card>
        </MainLayout>
    );
};

export default Detail;
