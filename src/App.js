import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./Main";
import Home from "./layouts/Home";
import Benefit from "./layouts/Benefit";
import Place from "./layouts/Place";
import Introduce from "./layouts/Introduce";
import AdminMain from "./layouts/admin/AdminMain";
import Admin from "./layouts/admin/index";
import Dashboard from "./layouts/admin/Dashboard";

import ScrollToTop from "./component/ScrollToTop";
import "./css/App.css";
import BenefitStatus from "./layouts/admin/BenefitStatus";
import ProgramStatus from "./layouts/admin/ProgramStatus";
import BenefitRegist from "./layouts/admin/BenefitRegist";
import ProgramRegist from "./layouts/admin/ProgramRegist";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="intro" element={<Introduce />} />
                    <Route path="benefit" element={<Benefit />} />
                    <Route path="place" element={<Place />} />
                </Route>
                <Route path="admin" element={<AdminMain />}>
                    <Route index element={<Admin />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="benefit-status" element={<BenefitStatus />} />
                    <Route path="program-status" element={<ProgramStatus />} />
                    <Route path="benefit-regist" element={<BenefitRegist />} />
                    <Route path="program-regist" element={<ProgramRegist />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
