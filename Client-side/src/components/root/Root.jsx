import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Root = () => {
    return (
        <div data-theme="synthwave" className="min-h-dvh font-roboto ">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;