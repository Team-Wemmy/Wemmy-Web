import { Outlet } from "react-router-dom";
import Nav from "./component/nav/Nav";
import Footer from "./component/Footer";

function Main() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignItems: "center" }}>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Main;
