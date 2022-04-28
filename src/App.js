import './App.css';
import NavBar from './componentes/NavBar';
import NavInfo from './componentes/NavInfo';
import SwiperHome from './componentes/SwiperHome';
import Card from './componentes/Card';
import Footer from './componentes/Footer';
import CategorySectionCard from './componentes/CategorySectionCard';
// import SwiperPopular from './componentes/SwiperPopular';

function App() {
  return (
    <div className="w-full h-full br-gray-800 text-sm">
      <NavBar />
      <NavInfo />
      <SwiperHome />
      <Card saludo="Category of Recipes" />
      <div className="container mt-20">
        <div className="flex justify-center space-x-6 mx-8">
          <CategorySectionCard name="New recipes" img="https://api.tubeneficiosi.com/uploads/store-categories/gastronomia.jpg" />
          <CategorySectionCard name="Low in calories" />
          <CategorySectionCard name="Paleo" />
          <CategorySectionCard name="High in protein" />
        </div>
      </div>
      <Card saludo="Popular" />
      {/* <div className="flex container mt-20">
        <SwiperPopular />
      </div> */}


      <Card saludo="Plans" />
      <Card saludo="Popular by Countries" />
      <Footer />
    </div>
  );
}

export default App;
