import { Routes, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import ProductPage from "./ProductPage";
import SingleProductPage from "./SingleProductPage";
import LoginAfter from "./LoginAfter";
import SignUp from "./SignUp";
import OrderPlaced from "./OrderPlaced"
function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path={"/login"} element={<LoginAfter />}></Route>
            <Route path={"/signUp"} element={<SignUp />}></Route>
            <Route path="/productPage" element={<ProductPage />} />
            <Route path="/productPageCat/:category" element={<ProductPage />} />
            <Route path="/productPage/details/:Product_id" element={<SingleProductPage />} />
            <Route path="/orderSuccesfull" element={<OrderPlaced />} />
        </Routes>
    )
}

export default AllRoutes;