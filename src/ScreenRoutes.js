import React from "react";

const Home = React.lazy(() => import("components/Home"));

const ScreenRoutes = [{ path: "/", exact: true, element: Home }];

export default ScreenRoutes;
