import React from "react";
import { Outlet } from "react-router-dom";

function SimpleOutlet() {
    return (
        <>
        <Outlet />
        </>
    )
}

export default SimpleOutlet;