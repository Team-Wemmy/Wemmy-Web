import { Box, Typography } from "@mui/material";
import google from "../img/googleB.png";
import apple from "../img/appleB.png";
import AppBtn from "./main/AppBtn";

function Footer() {
    return (
        <Box
            position="static"
            sx={{
                height: "150px",
                width: "1200px",
                padding: "40px",
                marginTop: "40px",
                textAlign: "center",
                borderTop: "1px solid #e7e7e7",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ opacity: 0.6 }}>
                <Typography variant="body2" color="#303239" align="start" fontWeight="bold">
                    TEM WEMMY(어?~금지 팀)
                </Typography>
                <Typography variant="body2" color="#303239" align="start">
                    COPYRIGHTⓒ2024.WEMMY. ALL RIGHTS RESERVED.
                </Typography>
                <Box
                    sx={{
                        width: "500px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "25px",
                    }}
                >
                    <Typography variant="body2">이용약관</Typography>
                    <Typography variant="body2">개인정보처리방침</Typography>
                    <Typography variant="body2">위치기반서비스 이용약관</Typography>
                    <Typography variant="body2">문의하기</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" color="#303239" align="start">
                    Wemmy 앱 다운로드
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <AppBtn text="App Store" image={apple} backgroundColor="#E4E5ED" />
                    <AppBtn text="Google Play" image={google} backgroundColor="#E4E5ED" />
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
