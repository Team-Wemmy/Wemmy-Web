import * as React from "react";

import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

function List({ title, district, imageUrl }) {
    return (
        <>
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
                        src={imageUrl}
                        alt={title}
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
            <Box sx={{ marginTop: "5px", marginLeft: "3px" }}>
                <Typography>
                    <strong>{title}</strong>
                </Typography>
                <Typography sx={{ color: "#7F8295" }}>{district}</Typography>
            </Box>
        </>
    );
}

export default List;
