import { useEffect } from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Live from './pages/Live';
import Liveplace1 from "./pages/Liveplace1";
import Liveplace2 from "./pages/Liveplace2";
import Liveplace3 from "./pages/Liveplace3";
import Data from './pages/Data';
import Dataplace1 from "./pages/Dataplace1";
import Dataplace2 from "./pages/Dataplace2";
import Dataplace3 from "./pages/Dataplace3";

import ReactGA from 'react-ga4';

function App() {

  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/live" element={<Live/>} />
        <Route path="/live-place1" element={<Liveplace1/>}/>
        <Route path="/live-place2" element={<Liveplace2/>}/>
        <Route path="/live-place3" element={<Liveplace3/>}/>

        <Route path="/data" element={<Data/>} />
        <Route path="/data-place1" element={<Dataplace1/>}/>
        <Route path="/data-place2" element={<Dataplace2/>}/>
        <Route path="/data-place3" element={<Dataplace3/>}/>
     </Routes>
  );
}
export default App;
