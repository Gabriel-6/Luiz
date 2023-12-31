import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import PetSpace from "../pages/PetsSpace"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/signin" element={<Signin />} />
                    <Route path="/petspaces/:id" element={<PetSpace />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;