import { Outlet } from "react-router-dom";
import Sidebar from "../../component/admin/Sidebar";
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import admin_logo from "../../img/wemmy_admin.png";
import { BorderColor } from "@mui/icons-material";

function AdminMain() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminName, setAdminName] = useState("");
    const [adminPw, setAdminPw] = useState("");

    const inputStyle = {
        width: "250px",
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#FD5B73",
            },
        },
    };

    const handleLogin = () => {
        if (adminName === "" && adminPw === "") {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
        } else if (adminName === process.env.REACT_APP_ADMINID && adminPw === process.env.REACT_APP_ADMINPASSWORD) {
            setIsLoggedIn(true);
        } else {
            alert("아이디 또는 비밀번호가 잘못되었습니다.");
        }
    };
    if (!isLoggedIn) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    flexDirection: "column",
                }}
            >
                <img src={admin_logo} alt="" width="200px" />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "column",
                        marginTop: "50px",
                        height: "200px",
                    }}
                >
                    <TextField
                        placeholder="아이디"
                        variant="outlined"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        sx={inputStyle}
                    />
                    <TextField
                        placeholder="비밀번호"
                        type="password"
                        variant="outlined"
                        value={adminPw}
                        onChange={(e) => setAdminPw(e.target.value)}
                        sx={inputStyle}
                    />
                    <Button
                        onClick={handleLogin}
                        variant="contained"
                        sx={{
                            width: "250px",
                            color: "#FFF",
                            backgroundColor: "#FD5B73",
                            boxShadow: "none",
                            ":hover": { backgroundColor: "#FD5B73" },
                        }}
                    >
                        로그인
                    </Button>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Sidebar />
            <Box
                component="div"
                sx={{
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    marginLeft: "288px",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default AdminMain;
