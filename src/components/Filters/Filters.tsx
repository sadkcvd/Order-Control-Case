import React, { Dispatch, SetStateAction } from "react";
import { Input, Select, DatePicker, Button, Row, Col } from "antd";
import dayjs from "dayjs";

type FiltersState = Record<string, string | null>;

type FiltersProps = {
    definedFilters: FiltersState
    setDefinedFilters: Dispatch<SetStateAction<FiltersState>>
    filters: FilterType[],
    tableData: any;
    setFilteredTableData: (filteredData: any) => void;
}

type FilterType = {
    key: string;
    placeholder: string;
    type: "input" | "date" | "select";
    prefix?: React.ReactNode;
    options?: { label: string; value: string }[];
};

const Filters: React.FC<FiltersProps> = ({ filters, definedFilters, setDefinedFilters, tableData, setFilteredTableData }) => {
    const { Option } = Select;

    const handleFilter = () => {
        let filtered = [...tableData];

        Object.entries(definedFilters).forEach(([key, value]) => {
            if (!value || value === "") return;

            const filterConfig = filters.find(filter => filter.key === key);

            if (!filterConfig) return;

            if (filterConfig.type === "input") {
                filtered = filtered.filter((item) =>
                    item[key]?.toString().toLowerCase().includes(value.toLowerCase())
                );
            }

            if (filterConfig.type === "select") {
                filtered = filtered.filter((item) => item[key] === value);
            }

            if (filterConfig.type === "date") {
                filtered = filtered.filter((item) => {
                    const itemDate = new Date(item[key]).toISOString().split("T")[0];
                    return itemDate === value;
                });
            }
        });

        setFilteredTableData(filtered);
    };

    const clearFilter = () => {
        setDefinedFilters({});
    };

    const handleChange = (key: string, value: string | null) => {
        setDefinedFilters((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <Row gutter={[50, 20]} className="filters">
            {filters.map(({ key, placeholder, type, prefix, options }: FilterType) => (
                <Col key={key} span={4} lg={6} md={12} xs={24}>
                    {type === "input" && (
                        <Input
                            placeholder={placeholder}
                            prefix={prefix}
                            value={definedFilters[key] || ""}
                            onChange={(e) => handleChange(key, e.target.value)}
                        />
                    )}
                    {type === "date" && (
                        <DatePicker
                            placeholder={placeholder}
                            style={{ width: "100%" }}
                            value={definedFilters[key] ? dayjs(definedFilters[key]) : null}
                            onChange={(_, dateString) => handleChange(key, Array.isArray(dateString) ? dateString[0] : dateString)}
                        />
                    )}
                    {type === "select" && (
                        <Select
                            placeholder={placeholder}
                            style={{ width: "100%" }}
                            value={definedFilters[key] || undefined}
                            onChange={(value) => handleChange(key, value)}
                            allowClear
                        >
                            {options?.map(({ label, value }) => (
                                <Option key={value} value={value}>
                                    {label}
                                </Option>
                            ))}
                        </Select>
                    )}
                </Col>
            ))}

            <Col className="filter-btns" lg={12} md={24} sm={24} xs={24}>
                <Button type="primary" onClick={handleFilter}>Filtrele</Button>
                <Button type="primary" onClick={clearFilter}>Temizle</Button>
            </Col>
        </Row >
    );
};

export default Filters;
