import { Outlet } from "react-router-dom";


const root = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default root;