import { Table as AntTable, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { ColumnsType } from "antd/es/table";

const Table = ({ columns, tableData, showSizeChanger = true }: { columns: ColumnsType<any>, tableData: any[] | null, showSizeChanger?: boolean }) => {

    return <div className="orders-table">
        {
            !tableData ?
                <Spin indicator={<LoadingOutlined spin />} size="large" />
                :
                <div style={{ overflowX: "auto", maxWidth: "100%" }}>
                    <AntTable
                        columns={columns}
                        dataSource={tableData}
                        pagination={{ pageSizeOptions: ["5", "10", "20"], defaultPageSize: 5, showSizeChanger: showSizeChanger }}
                        rowKey={"id"}
                    />
                </div>
        }
    </div>
};

export default Table;
