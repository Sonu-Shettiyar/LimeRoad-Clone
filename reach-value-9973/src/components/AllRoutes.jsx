import { Routes, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import ProductPage from "./ProductPage";
import SingleProductPage from "./SingleProductPage";
function AllRoutes() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainContainer />} />
                <Route path="/productPage" element={<ProductPage />} />
                <Route path="/productPageCat/:category" element={<ProductPage />} />
                <Route path="/productPage/details/:Product_id" element={<SingleProductPage />} />
            </Routes>
        </>
    )
}

export default AllRoutes;