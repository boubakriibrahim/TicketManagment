import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Dao from "./components/Dao";
import TennisCard from "./components/TennisCard";
import Categories from "./pages/Categories"
import FootballMatches from './pages/FootballMatches'
import Getyourticket from "./components/Getyourticket";
import Ticketpage from './pages/Ticketpage'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/Home" element={<Header />} />
        <Route path="/DAO" element={<Dao/>} />
        <Route path='/Matches' element={<Categories/>} />
        <Route path='/FootballMatches' element={<FootballMatches/>} />
        <Route  path='/FootballMatches/:id' element={<Getyourticket/>} />
        <Route  path='/ticket' element={<Ticketpage/>} />
      </Routes>
   
    </div>
  );
}

export default App;
