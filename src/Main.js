import { Outlet } from "react-router-dom";
import Nav from "./component/nav/Nav";
import Footer from "./component/Footer";

function Main() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Nav />
            <div style={{ marginTop: "64px" }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
