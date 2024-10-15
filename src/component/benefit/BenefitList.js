// src/component/benefit/List.js

import * as React from "react";

import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

function List({ title, type, imageUrl, group }) {
    return (
        <>
            <Box
                sx={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    textAlign: "center",
                    padding: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                    <Typography
                        sx={{
                            backgroundColor: "#FFE7EA",
                            color: "#FD5B73",
                            padding: "3px 7px",
                            borderRadius: "5px",
                            fontSize: "12px",
                        }}
                    >
                        마감임박 D-3🔥
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Typography
                            sx={{
                                backgroundColor: "#FFF7F8",
                                color: "#FF8093",
                                padding: "3px 7px",
                                borderRadius: "5px",
                                fontSize: "12px",
                                marginRight: "5px",
                            }}
                        >
                            무료
                        </Typography>
                        <Typography
                            sx={{
                                backgroundColor: "#F1F2F6",
                                color: "#7F8295",
                                padding: "3px 7px",
                                borderRadius: "5px",
                                fontSize: "12px",
                            }}
                        >
                            온・오프라인
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            margin: "20px 0",
                        }}
                    >
                        <img
                            src={imageUrl}
                            alt={title}
                            style={{
                                border: "1px solid #ddd",
                                position: "relative",
                                top: "0",
                                left: "0",
                                width: "80px",
                                height: "80px",
                                objectFit: "contain",
                                objectPosition: "center",
                                backgroundColor: "white",
                            }}
                        />
                        <Box
                            sx={{
                                marginLeft: "15px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "start",
                            }}
                        >
                            <Typography sx={{ whiteSpace: "normal", wordBreak: "keep-all" }}>
                                <strong>{title}</strong>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginLeft: "3px" }}>
                    <Typography sx={{ color: "#7F8295", fontSize: "11px" }}>상시 신청</Typography>
                </Box>
            </Box>
        </>
    );
}

export default List;
