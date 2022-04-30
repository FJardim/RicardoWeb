import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import AppLayout from './componentes/AppLayout';
import Recipes from './pages/Recipes';
import Categories from './pages/Categories';
import RecipesDetail from './pages/RecipesDetail';
import Combos from './pages/Combos';

function App() {

  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipesdetail" element={<RecipesDetail />} />  
          <Route path="/combos" element={<Combos />} />        
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
