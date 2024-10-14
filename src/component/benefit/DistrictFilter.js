import { Box, Button, List, ListItem, Checkbox, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function DistrictFilter(district, setDistrict) {
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
    return (
        <Box sx={{ border: "1px solid #000", margin: 0, height: "300px", display: "flex", flexDirection: "row" }}>
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
            <hr />
            <List
                sx={{
                    height: "300px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}
            >
                {DISTRICT_SELECT.map((district, i) => {
                    return (
                        <ListItem key={i} sx={{ width: "15%", padding: 0, height: "45px" }}>
                            <ListItemButton sx={{ padding: 0, margin: 0, justifyContent: "flex-start" }}>
                                <Checkbox />
                                <ListItemText primary={district} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}
