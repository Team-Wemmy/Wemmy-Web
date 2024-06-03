import { NavLink } from "react-router-dom";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, CssBaseline, Divider } from "@mui/material";
import logo from "../../img/logo-bg-none.png";

function Sidebar() {
    const getLinkStyle = ({ isActive }) => {
        return {
            width: "240px",
            textDecoration: "none",
            color: "#000",
        };
    };

    const SidebarList = (
        <Box sx={{ width: 240 }} role="presentation">
            <NavLink to={"/admin"} style={{ textDecoration: "none", color: "#000" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <h1 style={{ textAlign: "center" }}>
                        <img src={logo} alt="" width="30px" style={{ marginRight: "10px" }} />
                        Wemmy
                    </h1>
                    <p style={{ marginBottom: "0px", color: "rgb(0,0,0,0.4)" }}>admin</p>
                </div>
            </NavLink>
            <CssBaseline />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <NavLink to="/admin/benefit-list" style={getLinkStyle}>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary="혜택 관리" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink to="/admin/apply" style={getLinkStyle}>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary="신청 목록" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer variant="permanent" open>
                {SidebarList}
            </Drawer>
        </div>
    );
}

export default Sidebar;
