import { TableProps } from "antd";

export type HeaderStatsType = {
    packetRoute: number,
    DMPackageCount: number,
    packageReleased: number,
    delivered: number,
    notDelivered: number,
    completedOrder: string
}

export type OrderStatus =
    | "0"  // Oluşturuldu
    | "1"  // İptal Edildi
    | "2"  // Teslim Edildi
    | "3"  // Bekliyor
    | "4"; // Teslim Edilemedi

export type DistributionStatus = "EVET" | "HAYIR";

export type Order = {
    orderNo: number;
    shipmentTrackingNo: string;
    orderTrackingNo: string;
    customerName: string;
    district: string;
    plate: string;
    Statu: OrderStatus;
    releasedForDistribution: DistributionStatus;
    Date: string;
}

export type Orders = Order[];

export type ColumnsType<T extends object> = TableProps<T>['columns']; // Antd Datatable Columns Type