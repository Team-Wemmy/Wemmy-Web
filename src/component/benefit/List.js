import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import koreaImg from "../../img/korea.jpg";
import geumcheonImg from "../../img/geumcheon.png";
import { Typography, FormControl, MenuItem, Select } from "@mui/material";
import axios from "axios";

function List() {
    const SORT = ["추천순", "최신순", "신청많은순"];
    const CITY = "서울특별시";

    const [sort, setSort] = useState("추천순");
    const [benefit, setBenefit] = useState([]);

    useEffect(() => {
        const fetchBenefit = async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_API_URL}/benefit/web/list?city=${CITY}`);
                console.log("응답결과");
                console.log(resp.data);
                setBenefit(resp.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchBenefit();
    }, []);

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
                {benefit.map((item, index) => (
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
                                    src={item.imageUrl}
                                    alt={item.title}
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
                                <strong>{item.title}</strong>
                            </Typography>
                            <Typography sx={{ color: "#7F8295" }}>{item.district}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default List;
