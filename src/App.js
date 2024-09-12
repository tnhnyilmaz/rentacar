import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Detail from "./components/detail/Detail";
import Navbar from "./components/Navbar/Navbar";
import Araclar from "./components/page/Araclar";
import Home from './components/page/Home';
import Odeme from "./components/page/Odeme";
import { checkAndUpdateAvailability } from "./redux/availableCarSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAndUpdateAvailability());
    const interval = setInterval(() => {
      dispatch(checkAndUpdateAvailability());
      console.log("checkAndUpdateAvailability çalışıyor")
    }, 3600000);
    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/araclar/:category" element={<Araclar />} />
          <Route path="/araclar/:category/:id" element={<Detail />} />
          <Route path="/araclar/:category/:id/odeme" element={<Odeme/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
