import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "common/Loading";
import ScreenRoutes from "ScreenRoutes";
import { Grid } from "@mui/material";

function App() {
  const CustomLoading = () => {
    return (
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "rgba(0,0,0,.15)",
        }}
      >
        <Loading />
      </Grid>
    );
  };
  return (
    <Suspense fallback={<CustomLoading />}>
      <Router>
        <Routes>
          {ScreenRoutes.map((route, idx) => {
            return (
              <Route
                key={`Layout_${idx}`}
                path={route.path}
                exact={route.exact}
                element={<route.element />}
              />
            );
          })}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
