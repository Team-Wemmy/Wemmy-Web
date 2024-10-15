import { Box, Button, List, ListItem, Checkbox, ListItemButton, ListItemText } from "@mui/material";
import { useEffect } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function DistrictFilter({ district, setDistrict }) {
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

    useEffect(() => {
        if (district.length === 0) {
            setDistrict(["서울 전체"]);
        }
    }, [district, setDistrict]);

    const handleCheckBox = (event) => {
        const { value, checked } = event.target;
        if (value === "서울 전체") {
            if (checked) {
                setDistrict(["서울 전체"]);
            } else {
                setDistrict([]);
            }
        } else {
            if (checked) {
                setDistrict((prev) => {
                    if (prev.includes("서울 전체")) {
                        return [...prev.filter((item) => item !== "서울 전체"), value];
                    }
                    return [...prev, value];
                });
            } else {
                setDistrict((prev) => prev.filter((item) => item !== value));
            }
        }
    };

    return (
        <Box sx={{ border: "1px solid #000", margin: 0, height: "280px", display: "flex", flexDirection: "row" }}>
            <Button
                sx={{
                    width: "250px",
                    height: "45px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    paddingLeft: "20px",
                    color: "#FD5B73",
                    backgroundColor: "#FFF7F8",
                }}
            >
                서울
                <KeyboardArrowRightIcon />
            </Button>
            <hr style={{ opacity: 0.2 }} />
            <List
                sx={{
                    height: "250px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    margin: "10px",
                }}
            >
                {DISTRICT_SELECT.map((districtName, i) => {
                    return (
                        <ListItem key={i} sx={{ width: "15%", height: "35px", color: "#7F8295" }}>
                            <Checkbox
                                value={districtName}
                                checked={district.includes(districtName)}
                                onChange={handleCheckBox}
                                sx={{
                                    justifyContent: "flex-start",
                                    color: "#AEB2C6",
                                    "&.Mui-checked": {
                                        color: "#FD5B73",
                                    },
                                }}
                            />
                            <ListItemText primary={districtName} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}
