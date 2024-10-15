import { Outlet } from "react-router-dom";
import Sidebar from "../../component/admin/Sidebar";
import { Box } from "@mui/material";

function AdminMain() {
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
