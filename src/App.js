import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./Main";
import Home from "./layouts/Home";
import Benefit from "./layouts/Benefit";
import Place from "./layouts/Place";
import Introduce from "./layouts/Introduce";
import AdminMain from "./layouts/admin/AdminMain";
import Admin from "./layouts/admin/index";
import BenefitsList from "./layouts/admin/BenefitsList";
import Apply from "./layouts/admin/Apply";
import "./css/App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="intro" element={<Introduce />} />
                    <Route path="benefit" element={<Benefit />} />
                    <Route path="place" element={<Place />} />
                </Route>
                <Route path="admin" element={<AdminMain />}>
                    <Route index element={<Admin />} />
                    <Route path="benefit-list" element={<BenefitsList />} />
                    <Route path="apply" element={<Apply />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
