import { Box, Typography, List, IconButton, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ProgramStatus() {
    const PROGRAM_STATUS = [
        {
            title: "임산부 숲 태교 교실 (주말, 10월)",
            city: "금천구",
            type: "임신",
            group: "프로그램",
            day: "2024.10.04",
            name: "김페르",
            tel: "010-1234-5678",
            email: "asd123@gmail.com",
            address: "서울특별시 금천구 금하로24길 6 101호",
            imgUrl: "https://github.com/Team-Wemmy/Wemmy-City-Image/blob/main/geumcheon-gu.png?raw=true",
        },
        {
            title: "임산부 숲 태교 교실 (주말, 10월)",
            city: "금천구",
            type: "임신",
            group: "프로그램",
            day: "2024.10.05",
            name: "유소나",
            tel: "010-4321-8765",
            email: "qwe123@gmail.com",
            address: "서울특별시 금천구 금하로24길 6 102호",
            imgUrl: "https://github.com/Team-Wemmy/Wemmy-City-Image/blob/main/geumcheon-gu.png?raw=true",
        },
    ];

    const labelStyle = {
        height: "15px",
        backgroundColor: "#FFF7F8",
        color: "#FF8093",
        padding: "2px 5px 0px 5px",
        borderRadius: "3px",
        fontSize: "10px",
        marginRight: "5px",
    };
    return (
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, marginTop: "120px" }}>
            <Typography sx={{ fontSize: "30px", marginLeft: "20px", marginBottom: "15px" }}>
                <strong>프로그램 신청 현황</strong>
            </Typography>
            <List sx={{ width: "100vh" }}>
                {PROGRAM_STATUS.map((p, i) => (
                    <ListItem key={i}>
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                width: "100%",
                                borderRadius: "20px",
                                padding: "30px",
                                marginBottom: "10px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: "20px",
                                }}
                            >
                                <img
                                    src={p.imgUrl}
                                    alt={p.title}
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
                                    <strong>{p.title}</strong>
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
                                            {p.type}
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
                                            {p.group}
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
                                            {p.city}
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
                                        {p.day}
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
                                    <Typography>{p.name}</Typography>
                                    <Typography>{p.tel}</Typography>
                                    <Typography>{p.email}</Typography>
                                    <Typography>{p.address}</Typography>
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
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default ProgramStatus;
