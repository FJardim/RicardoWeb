import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./componentes/AppLayout";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import RecipesDetail from "./pages/RecipesDetail";
import Combos from "./pages/Combos";
import RecipesChef from "./pages/RecipesChef";
import CombosChef from "./pages/CombosChef";
import BlogChef from "./pages/BlogChef";
import Sellers from "./pages/Sellers";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:slug" element={<RecipesDetail />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/recipeschef" element={<RecipesChef />} />
          <Route path="/comboschef" element={<CombosChef />} />
          <Route path="/blogchef" element={<BlogChef />} />
          <Route path="/sellers" element={<Sellers />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
