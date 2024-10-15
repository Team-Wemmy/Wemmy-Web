// src/component/benefit/Selectbox1.js

import {
    Box,
    Button,
    FormControl,
    List,
    ListItem,
    MenuItem,
    Select,
    styled,
    Divider,
    Checkbox,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import SearchIcon from "@mui/icons-material/Search";
import ReplayIcon from "@mui/icons-material/Replay";
import { useState } from "react";
import DistrictFilter from "./DistrictFilter";
import TypeFilter from "./TypeFilter";

function SelectBox({ type, setType, district, setDistrict }) {
    const FILTER_SELECT = ["지역 선택", "분야 선택"];

    const [activeBox, setActiveBox] = useState(null);

    const handleFilterClick = (index) => {
        setActiveBox(activeBox === index ? null : index);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: "60px", width: "1300px" }}>
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
                            <ListItem sx={{ width: "350px", height: "60px", border: "1px solid #E4E5ED" }}>
                                <Button
                                    key={idx}
                                    onClick={() => handleFilterClick(idx)}
                                    sx={{ color: "black", ":hover": { backgroundColor: "#fff" } }}
                                >
                                    {filter}
                                    <ArrowDropDownIcon sx={{ marginLeft: "200px" }} />
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
            {activeBox === 0 && <DistrictFilter district={district} setDistrict={setDistrict} />}
            {activeBox === 1 && <TypeFilter type={type} setType={setType} />}
        </Box>
    );
}

export default SelectBox;
