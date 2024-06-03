import { Outlet } from "react-router-dom";
import Nav from "./component/nav/Nav";
import Footer from "./component/Footer";

function Main() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Main;
