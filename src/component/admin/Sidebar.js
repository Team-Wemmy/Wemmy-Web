import { NavLink } from "react-router-dom";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Collapse } from "@mui/material";
import admin_logo from "../../img/wemmy_admin.png";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { styled } from "@mui/material/styles";

function Sidebar() {
    const [open, setOpen] = useState([false, false]);
    const getLinkStyle = () => {
        return {
            width: "240px",
            textDecoration: "none",
            color: "#000",
        };
    };

    const handleToggle = (i) => {
        const o = { ...open };
        o[i] = !o[i];
        setOpen(o);
    };

    const StyledNavLink = styled(NavLink)(() => ({
        padding: "10px",
        color: "#000",
        textDecoration: "none",
        "&.active": {
            color: "#fc5a73",
        },
        "@media (max-width: 550px)": {
            display: "none",
        },
    }));

    const SidebarList = (
        <Box
            sx={{
                width: "240px",
                flex: 1,
                padding: "24px",
                backgroundColor: "#fff",
                height: "100vh",
                border: "none",
            }}
            role="presentation"
        >
            <NavLink
                to={"/admin"}
                style={{
                    color: "#000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "35px",
                }}
            >
                <img src={admin_logo} alt="" width="200px" />
            </NavLink>
            <List>
                <ListItem disablePadding>
                    <NavLink to="/admin/dashboard" style={getLinkStyle}>
                        <ListItemButton>
                            <ListItemText primary="대시보드" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleToggle(0)}>
                        <ListItemText primary="신청 현황" />
                        {open[0] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={open[0]} timeout="auto" unmountOnExit sx={{ marginLeft: "30px" }}>
                    <List component="div" disablePadding sx={{ display: "flex", flexDirection: "column" }}>
                        <StyledNavLink to="/admin/benefit-status">혜택 신청 현황</StyledNavLink>
                        <StyledNavLink to="/admin/program-status">프로그램 신청 현황</StyledNavLink>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleToggle(1)}>
                        <ListItemText primary="등록" />
                        {open[1] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={open[1]} timeout="auto" unmountOnExit sx={{ marginLeft: "30px" }}>
                    <List component="div" disablePadding sx={{ display: "flex", flexDirection: "column" }}>
                        <StyledNavLink to="/admin/benefit-regist">혜택 등록</StyledNavLink>
                        <StyledNavLink to="/admin/program-regist">프로그램 등록</StyledNavLink>
                    </List>
                </Collapse>
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer
                variant="permanent"
                sx={{
                    "& .MuiDrawer-paper": {
                        border: "none",
                    },
                }}
                open
            >
                {SidebarList}
            </Drawer>
        </div>
    );
}

export default Sidebar;
