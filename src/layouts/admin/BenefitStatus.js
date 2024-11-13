import { Box, Typography, List, IconButton, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import axios from "axios";
import wemmyLogo from "../../img/wemmy_logo.png";

function BenefitStatus() {
    const [register, setRegister] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBenefit = async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_API_URL}/benefit/v2/register/list`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
                    },
                });
                const programData = resp.data.filter((item) => item.group === "benefit");
                console.log("Fetched program data:", programData);
                setRegister(programData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchBenefit();
    }, []);

    return (
        <Box sx={{ marginTop: "120px", paddingLeft: "230px" }}>
            <Typography sx={{ fontSize: "30px", marginLeft: "20px", marginBottom: "15px" }}>
                <strong>혜택 신청 현황</strong>
            </Typography>
            <List
                sx={{
                    width: "100vh",
                    overflow: "auto",
                    height: "80vh",
                    "&::-webkit-scrollbar": {
                        display: "none", // 웹킷 브라우저에서 스크롤바 숨기기
                    },
                }}
            >
                {register.map((r, i) => (
                    <ListItem key={i}>
                        <Box>
                            {r.data.map((item, j) => {
                                // 자치구를 추출하기 위해 address를 split 사용
                                const district = item.address.split(" ")[1]; // 주소가 "서울특별시 강남구" 형식일 때

                                return (
                                    <Box
                                        key={j}
                                        sx={{
                                            marginBottom: "20px",
                                            backgroundColor: "#fff",
                                            width: "1050px",
                                            borderRadius: "20px",
                                            padding: "30px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            <img
                                                src={wemmyLogo}
                                                alt={item.title}
                                                style={{
                                                    border: "1px solid #ddd",
                                                    position: "relative",
                                                    width: "40px",
                                                    height: "40px",
                                                    objectFit: "contain",
                                                    objectPosition: "center",
                                                    backgroundColor: "white",
                                                    borderRadius: "5px",
                                                }}
                                            />
                                            <Typography sx={{ flex: 2, marginLeft: "20px", fontSize: "20px" }}>
                                                <strong>{item.title}</strong>
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    flex: 3,
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                    <Typography
                                                        sx={{
                                                            height: "15px",
                                                            backgroundColor: "#E1EFFF",
                                                            color: "#509CF7",
                                                            padding: "2px 5px 0px 5px",
                                                            borderRadius: "3px",
                                                            fontSize: "10px",
                                                            marginRight: "5px",
                                                        }}
                                                    >
                                                        임신
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            height: "15px",
                                                            backgroundColor: "#FFF7F8",
                                                            color: "#FF8093",
                                                            padding: "2px 5px 0px 5px",
                                                            borderRadius: "3px",
                                                            fontSize: "10px",
                                                            marginRight: "5px",
                                                        }}
                                                    >
                                                        혜택
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            height: "15px",
                                                            backgroundColor: "#F1F2F6",
                                                            color: "#7F8295",
                                                            padding: "2px 5px 0px 5px",
                                                            borderRadius: "3px",
                                                            fontSize: "10px",
                                                        }}
                                                    >
                                                        {district}
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        color: "#7F8295",
                                                        border: "1px solid #F1F2F6",
                                                        padding: "2px 5px 0px 5px",
                                                        borderRadius: "10px",
                                                        fontSize: "10px",
                                                    }}
                                                >
                                                    {item.registerDate}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography>신청자 이름</Typography>
                                                <Typography>연락처</Typography>
                                                <Typography>이메일</Typography>
                                                <Typography>주소</Typography>
                                            </Box>
                                            <Box sx={{ flex: 4 }}>
                                                <Typography>{item.name || "김페르"}</Typography>
                                                <Typography>{item.phone || "010-0000-0000"}</Typography>
                                                <Typography>{item.email}</Typography>
                                                <Typography>
                                                    {item.address} {item.addressDetail}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ alignSelf: "end" }}>
                                                <IconButton sx={{ width: "40px" }}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default BenefitStatus;
