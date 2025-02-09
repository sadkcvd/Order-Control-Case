import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import StatsCards from "../components/StatsCards/StatsCards";
import Filters from "../components/Filters/Filters";
import Table from "../components/Table/Table";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import { HeaderStatsType, Order, Orders } from "../types/types";
import { get } from "../api/service";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ColumnsType } from "antd/es/table";
import { SearchOutlined } from '@ant-design/icons';
import { releasedForDistribution, status } from "../helpers/constants";

type FilterType = {
    key: string;
    placeholder: string;
    type: "input" | "date" | "select";
    prefix?: React.ReactNode;
    options?: { label: string; value: string }[];
};

type FiltersState = Record<string, string | null>;

const Home: React.FC = () => {
    const [headerStatsInfo, setHeaderStatsInfo] = useState<HeaderStatsType | null>(null);
    const [tableData, setTableData] = useState<Orders | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [total, setTotal] = useState<string | null>(null);
    const [filteredTableData, setFilteredTableData] = useState<Orders[]>([]);
    const [definedFilters, setDefinedFilters] = useState<FiltersState>({});
    const navigate = useNavigate();


    const getHeaderStats = async () => {
        const data = await get("header");
        setHeaderStatsInfo(data);
    };

    const getTableDatas = async () => {
        const data = await get("dataTable");
        setTableData(data);
        setFilteredTableData(data);
    };

    const getTotal = async () => {
        const data = await get("total");
        setTotal(data);
    };

    useEffect(() => {
        getHeaderStats();
        getTableDatas();
        getTotal();
    }, []);

    const filters: FilterType[] = [
        { key: "orderNo", placeholder: "Sipariş Numarası", prefix: <SearchOutlined />, type: "input" },
        { key: "shipmentTrackingNo", placeholder: "Gönderi Takip Numarası", prefix: <SearchOutlined />, type: "input" },
        { key: "plate", placeholder: "Plaka", prefix: <SearchOutlined />, type: "input" },
        { key: "Date", placeholder: "Tarih Aralığı", type: "date" },
        { key: "Statu", placeholder: "Durum", type: "select", options: status },
        { key: "releasedForDistribution", placeholder: "Dağıtım Durumu", type: "select", options: releasedForDistribution },
    ];

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
        {
            title: "Detay",
            key: "action",
            render: (row: Order) =>
                <Button
                    onClick={() => navigate(`/detail/${row.orderNo}`)}
                    className="table-detail-btn"
                    type="primary"
                >
                    Sipariş Detay
                </Button>
        },
    ];

    return (
        <MainLayout>
            <StatsCards headerStatsInfo={headerStatsInfo} />
            <ProgressBar completedOrder={headerStatsInfo?.completedOrder} />
            <div className="filter-and-table">
                <h2>SİPARİŞ KONTROL EKRANI</h2>
                <Filters
                    filters={filters}
                    definedFilters={definedFilters}
                    setDefinedFilters={setDefinedFilters}
                    tableData={tableData}
                    setFilteredTableData={setFilteredTableData} />
                <Table
                    columns={columns}
                    tableData={filteredTableData} />
            </div>
        </MainLayout>
    );
};

export default Home;




