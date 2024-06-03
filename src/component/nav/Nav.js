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
}));

function Nav() {
    const searchPlaceholder = "혜택이나 자치구를 검색해보세요";

    return (
        <AppBar component="nav" position="static" sx={{ boxShadow: 0, backgroundColor: "white" }}>
            <Toolbar sx={{ display: "flex", backgroundColor: "white", ml: 24 }}>
                <Box sx={{ mr: 5 }}>
                    <NavLink to={"/"}>
                        <img src={logo} alt="Logo" width="40px" />
                    </NavLink>
                </Box>

                {/* NavLink 컴포넌트 재사용 */}
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
