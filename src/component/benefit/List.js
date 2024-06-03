import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import koreaImg from "../../img/korea.jpg";
import geumcheonImg from "../../img/geumcheon.png";
import { Typography, FormControl, MenuItem, Select } from "@mui/material";

function List() {
    const BENEFITS = [
        { name: "첫만남이용권 지원", cote: "정부24", image: koreaImg },
        { name: "금천구 출생축하금 지원", cote: "서울시 금천구", image: geumcheonImg },
        { name: "맘편한임신 원스톱 서비스", cote: "정부24", image: koreaImg },
        { name: "서울시 임산부 교통비 지원", cote: "정부24", image: koreaImg },
        { name: "서울엄마아빠택시", cote: "서울시 금천구", image: geumcheonImg },
        { name: "금천구 육아종합지원센터 비용 감면", cote: "서울시 금천구", image: geumcheonImg },
        { name: "다둥이 행복카드", cote: "정부24", image: koreaImg },
        { name: "아이행복카드", cote: "정부24", image: koreaImg },
    ];
    const SORT = ["추천순", "최신순", "신청많은순"];

    const [sort, setSort] = useState("추천순");

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
                <FormControl sx={{ m: 1, minWidth: 130, marginBottom: "30px" }} size="small">
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        defaultValue={sort}
                        value={sort}
                        onChange={handleSortChange}
                    >
                        {SORT.map((region, idx) => {
                            return (
                                <MenuItem key={idx} value={region}>
                                    {region}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 12, md: 16 }}>
                {BENEFITS.map((benefit, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Box
                            sx={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                overflow: "hidden",
                                textAlign: "center",
                                padding: "16px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "0",
                                    paddingBottom: "70%", // 300px / 212px 의 비율 (비율을 유지)
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={benefit.image}
                                    alt={benefit.name}
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                        backgroundColor: "white",
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: "5px" }}>
                            <Typography>
                                <strong>{benefit.name}</strong>
                            </Typography>
                            <Typography sx={{ color: "#7F8295" }}>{benefit.cote}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default List;
