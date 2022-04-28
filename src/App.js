import './App.css';
import Contact from './pages/Contact';
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </AppLayout>    
  );
}

export default App;
