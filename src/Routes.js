import { Routes, Route, BrowserRouter } from "react-router-dom";
import CadastroPage from "./pages/CadastroPage";
import Navbar from "./pages/components/Navbar";
import HomePage from "./pages/HomePage";

function BRoutes() {
    return(
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>

    </BrowserRouter>
);
}

export default BRoutes;