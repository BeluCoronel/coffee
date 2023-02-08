import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar/>
      <Carrousel/>
      <ItemListContainer mensaje={"Probá el mejor café"} />
      <Footer/>
    </div>
  );
}

export default App;

