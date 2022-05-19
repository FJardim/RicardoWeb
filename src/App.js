import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./componentes/AppLayout";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import PlanDetail from "./pages/PlanDetail";
import Combos from "./pages/Combos";
import RecipesChef from "./pages/RecipesChef";
import CombosChef from "./pages/CombosChef";
import BlogChef from "./pages/BlogChef";
import Sellers from "./pages/Sellers";
import RecipesDetail from "./pages/RecipesDetail";
import Plans from "./pages/Plans";
import CombosDetail from "./pages/CombosDetail";
import MyAccountLayout from "./componentes/MyAccountLayout";
import OverviewUser from "./pages/OverviewUser";
import AccountInfo from "./pages/AccountInfo";
import Configuration from "./pages/Configuration"
import PaymentMethod from "./pages/PaymentMethod"

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/plan/:slug" element={<PlanDetail />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/recipeschef" element={<RecipesChef />} />
          <Route path="/comboschef" element={<CombosChef />} />
          <Route path="/blogchef" element={<BlogChef />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/recipes/:slug" element={<RecipesDetail />} />
          <Route path="/combos/:slug" element={<CombosDetail />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/payment" element={<PaymentMethod />} />
          <Route element={<MyAccountLayout />}>
            <Route path="/overview" element={<OverviewUser />} />
            <Route path="/accountinfo" element={<AccountInfo />} />
            <Route path="/configuration" element={<Configuration />} />
          </Route>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
