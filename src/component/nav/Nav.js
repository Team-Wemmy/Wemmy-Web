import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import logo from "../../img/wemmy_logo.png";
import { styled } from "@mui/material/styles";
import SearchInput from "./SearchInput"; // StyledInputBase와 관련된 스타일을 별도 파일로 분리

// 스타일 컴포넌트 정의
const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: "#000",
    textDecoration: "none",
    padding: theme.spacing(0, 5),
    "&.active": {
        color: "#fc5a73",
    },
    "@media (max-width: 550px)": {
        display: "none",
    },
}));

function Nav() {
    const searchPlaceholder = "혜택이나 자치구를 검색해보세요";

    return (
        <AppBar
            component="div"
            position="fixed"
            sx={{
                boxShadow: 0,
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Toolbar
                sx={{
                    boxSizing: "border-box",
                    display: "flex",
                    backgroundColor: "white",
                    justifyContent: "space-between",
                    margin: "0 auto",
                    padding: "0.8rem 2rem",
                    position: "relative",
                    "@media screen and (min-width: 768px)": {
                        maxWidth: "180rem",
                        height: "3.4rem",
                    },
                }}
            >
                <Box sx={{ mr: "40px", display: "inline-flex" }}>
                    <NavLink to={"/"}>
                        <img src={logo} alt="Logo" width="40px" />
                    </NavLink>
                </Box>
                <Box
                    component="nav"
                    sx={{
                        "@media screen and (min-width: 768px)": {
                            display: "flex",
                            alignItems: "center",
                            width: "500px",
                            padding: "0 20rem 0 0",
                            "@media (max-width: 950px)": {
                                padding: "0",
                            },
                        },
                    }}
                >
                    <StyledNavLink to="/intro">위미?</StyledNavLink>
                    <StyledNavLink to="/benefit">혜택 정보</StyledNavLink>
                    <StyledNavLink to="/place">복지시설</StyledNavLink>
                </Box>

                <Box sx={{ flexGrow: 1 }} />
                <SearchInput placeholder={searchPlaceholder} />
                <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
        </AppBar>
    );
}

export default Nav;
