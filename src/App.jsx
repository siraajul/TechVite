import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ByCategoryPage from "./Pages/ByCategoryPage";
import DetailsPage from "./Pages/DetailsPage";
import Footer from "./Components/Footer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Category/:categoryID" element={<ByCategoryPage/>}/>
                <Route path="/Details/:postID" element={<DetailsPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
