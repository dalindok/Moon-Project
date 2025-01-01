import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import RouteNavigation from "./routes/routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return <RouteNavigation />;
}

export default App;
