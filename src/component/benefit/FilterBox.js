import { Box, Button, List, ListItem, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SearchIcon from "@mui/icons-material/Search";
import ReplayIcon from "@mui/icons-material/Replay";
import { useState } from "react";
import DistrictFilter from "./DistrictFilter";
import TypeFilter from "./TypeFilter";

function FilterBox({ type, setType, district, setDistrict, onSearch }) {
    const FILTER_SELECT = ["지역 선택", "분야 선택"];
    const [activeBox, setActiveBox] = useState(null);

    // 로컬 상태로 필터 값 관리
    const [localType, setLocalType] = useState(type);
    const [localDistrict, setLocalDistrict] = useState(district);

    const handleFilterClick = (index) => {
        setActiveBox(activeBox === index ? null : index);
    };

    // 검색 버튼 클릭 시 필터 적용
    const handleSearchClick = () => {
        onSearch({ type: localType, district: localDistrict });
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: "60px", width: "1100px" }}>
            <List
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 0,
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    {FILTER_SELECT.map((filter, idx) => {
                        return (
                            <ListItem
                                key={idx} // key 추가
                                sx={{
                                    width: "350px",
                                    height: "60px",
                                    border: activeBox === idx ? "1px solid #000" : "1px solid #E4E5ED",
                                }}
                            >
                                <Button
                                    onClick={() => handleFilterClick(idx)}
                                    sx={{
                                        width: "100%",
                                        color: activeBox === idx ? "black" : "#7F8295",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        ":hover": { backgroundColor: "#fff" },
                                    }}
                                >
                                    {filter}
                                    {activeBox === idx ? (
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                color: "#7F8295",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "20px",
                                                    color: "#FD5B73",
                                                    marginRight: "5px",
                                                    marginTop: "5px",
                                                }}
                                            >
                                                *
                                            </span>{" "}
                                            중복 선택 가능
                                        </Typography>
                                    ) : null}
                                    {activeBox === idx ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                </Button>
                            </ListItem>
                        );
                    })}
                    <Button sx={{ border: "1px solid #E4E5ED", color: "#AEB2C6" }}>
                        <ReplayIcon />
                    </Button>
                </Box>
                <Button
                    variant="outlined"
                    onClick={handleSearchClick} // 검색 버튼 클릭 시 실행
                    sx={{
                        width: "250px",
                        height: "60px",
                        color: "white",
                        backgroundColor: "#FD5B73",
                        padding: "11px 18px",
                        fontSize: "18px",
                        borderRadius: 0,
                        border: "2px solid #FD5B73",
                        ":hover": {
                            color: "#FD5B73",
                            backgroundColor: "#fff",
                            border: "2px solid #FD5B73",
                        },
                    }}
                >
                    선택된 정보 검색하기
                    <SearchIcon sx={{ marginLeft: "7px" }} />
                </Button>
            </List>
            {activeBox === 0 && <DistrictFilter district={localDistrict} setDistrict={setLocalDistrict} />}
            {activeBox === 1 && <TypeFilter type={localType} setType={setLocalType} />}
        </Box>
    );
}

export default FilterBox;
