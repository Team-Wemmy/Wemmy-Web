// src/component/benefit/Selectbox1.js

import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import { useState } from "react";

function SelectBox({ filter, setFilter, district, setDistrict }) {
    const FILTER_SELECT = ["전체", "임산부", "영유아"];
    const DISTRICT_SELECT = [
        "서울 전체",
        "강남구",
        "강동구",
        "강북구",
        "강서구",
        "관악구",
        "광진구",
        "구로구",
        "금천구",
        "노원구",
        "도봉구",
        "동대문구",
        "동작구",
        "마포구",
        "서대문구",
        "서초구",
        "성동구",
        "성북구",
        "송파구",
        "양천구",
        "영등포구",
        "용산구",
        "은평구",
        "종로구",
        "중구",
        "중랑구",
    ];
    const [seoul, setSeoul] = useState("서울특별시");

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };

    const handleSeoulChange = (event) => {
        setSeoul(event.target.value);
    };

    return (
        <>
            <div style={{ marginTop: "25px" }}>
                <Button variant="outlined" sx={{ m: 1, color: "#FC5A73", borderColor: "#FC5A73", fontSize: "15px" }}>
                    필터 <FilterAlt sx={{ fontSize: "medium", marginLeft: "3px" }} />
                </Button>
            </div>
            <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
                <Select value={filter} onChange={handleFilterChange} defaultValue={filter}>
                    {FILTER_SELECT.map((filter, idx) => {
                        return (
                            <MenuItem key={idx} value={filter}>
                                {filter}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120, textAlign: "center" }} size="small" disabled>
                <Select
                    labelId="demo-simple-select-disabled-label"
                    defaultValue={seoul}
                    value={seoul}
                    onChange={handleSeoulChange}
                    IconComponent={() => null}
                    sx={{
                        paddingLeft: "12px",
                        backgroundColor: "#E3E5ED",
                        color: "#7F8295",
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 0, // 외곽선 없애기
                        },
                    }}
                >
                    <MenuItem value={seoul}>{seoul}</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
                <Select defaultValue={district} value={district} onChange={handleDistrictChange}>
                    {DISTRICT_SELECT.map((district, idx) => {
                        return (
                            <MenuItem key={idx} value={district}>
                                {district}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </>
    );
}

export default SelectBox;
