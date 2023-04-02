import { Routes, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import ProductPage from "./ProductPage";
import SingleProductPage from "./SingleProductPage";
import LoginAfter from "./LoginAfter";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./SignUp";
function AllRoutes() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainContainer />} />
                <Route path={"/login"} element={<LoginAfter />}></Route>
                <Route path={"/signUp"} element={<SignUp />}></Route>

                <Route path="/productPage" element={
                    <ProductPage />
                } />
                <Route path="/productPageCat/:category" element={
                    <ProductPage />
                }
                />
                <Route path="/productPage/details/:Product_id" element={
                    <SingleProductPage />
                } />
            </Routes>
        </>
    )
}

export default AllRoutes;