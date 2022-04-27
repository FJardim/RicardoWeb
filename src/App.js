import './App.css';
import NavBar from './componentes/NavBar';
import NavInfo from './componentes/NavInfo';
import SwiperHome from './componentes/SwiperHome';
import Card from './componentes/Card';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="w-full h-full br-gray-800 text-sm">
      <NavBar />
      <NavInfo />
      <SwiperHome />
      <Card saludo="Category of Recipes" />
      <Card saludo="Popular" />
      <Card saludo="Plans" />
      <Card saludo="Popular by Countries" />
      <Footer />
    </div>
  );
}

export default App;
