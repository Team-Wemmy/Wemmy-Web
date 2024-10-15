import { NavLink } from "react-router-dom";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Collapse } from "@mui/material";
import admin_logo from "../../img/wemmy_admin.png";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function Sidebar() {
    const [open, setOpen] = useState(false);
    const getLinkStyle = ({ isActive }) => {
        return {
            width: "240px",
            textDecoration: "none",
            color: "#000",
        };
    };

    const handleToggle = () => {
        setOpen(!open);
    };

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
                    <NavLink to="/admin/apply" style={getLinkStyle}>
                        <ListItemButton>
                            <ListItemText primary="대시보드" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleToggle}>
                        <ListItemText primary="신청 현황" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton>
                            <ListItemText primary="혜택 신청 현황" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="프로그램 신청 현황" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="등록" />
                        <ExpandMore />
                    </ListItemButton>
                </ListItem>
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
