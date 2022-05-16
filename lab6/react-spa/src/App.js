import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Main from "./components/main/main";
import Map from "./components/map/c_map";
import Forecast from "./components/forecast/c_forecast";
import Navbar from "./components/navbar/c_navbar";
import Auth from "./components/auth/c_auth";

function App() {
  return (
<Navbar />

  );
}
/*<BrowserRouter >
        <Routes>
          <Route path="/main" element={<Main />}/>
          <Route path="/map" element={<Map />}/>
            <Route path="/forecast" element={<Forecast />}/>
        </Routes>
      </BrowserRouter>*/
export default App;