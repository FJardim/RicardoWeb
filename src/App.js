import './App.css';
import NavBar from './componentes/NavBar';
import NavInfo from './componentes/NavInfo';
import SwiperHome from './componentes/SwiperHome';
import Card from './componentes/Card';
import Footer from './componentes/Footer';
import CategorySectionCard from './componentes/CategorySectionCard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import AppLayout from './componentes/AppLayout';
import Recipes from './pages/Recipes';


function App() {

  return (
    <AppLayout>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
        </BrowserRouter>
    </AppLayout>    
  );
}

export default App;
