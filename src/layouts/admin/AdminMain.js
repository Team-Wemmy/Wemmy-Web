import { Outlet } from "react-router-dom";
import Sidebar from "../../component/admin/Sidebar";
import { Box } from "@mui/material";

function AdminMain() {
    return (
        <>
            <Sidebar />
            <Box component="main" sx={{ marginLeft: "240px", alignItems: "center" }}>
                <Outlet />
            </Box>
        </>
    );
}

export default AdminMain;
