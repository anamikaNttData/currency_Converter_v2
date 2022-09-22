import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./reducers/appReducer";
import Loading from "./components/loading/loading";
import Main from "./pages/main";
import Header from "./components/header/header";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
// ====================================================
// Component

const App = (props) => {
  // variables
  const dispatch = useDispatch();

  // ====================================================
  // state
  const initialized = useSelector((state) => state.app.initialized);

  // ====================================================
  // Side effects
  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  function AppRoutes() {
    const routes = useRoutes([{ path: "/", element: <Main /> }]);
    return routes;
  }

  // ====================================================
  // JSX
  console.log(initialized);
  return !initialized ? (
    <Loading />
  ) : (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </div>
  );
};

// ====================================================
// Exports

export default App;
