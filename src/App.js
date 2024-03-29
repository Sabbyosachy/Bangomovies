
import './App.css';
import Header from './Pages/Home/Header/Header';
import BottomNav from './Pages/Home/BottomNav/BottomNav';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Container } from '@mui/material';
import Tvseries from './Pages/Home/Tvseries/Tvseries';
import Trending from './Pages/Home/Trending/Trending';
import Movies from './Pages/Home/Movies/Movies';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <div className="App">
    <Container>
    <Routes>
    <Route path="/" element={<Trending />} />
    <Route path="/tvseries" element={<Tvseries />} />
    <Route path="/movies" element={<Movies />} />
    </Routes>
    </Container>
    <BottomNav/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
