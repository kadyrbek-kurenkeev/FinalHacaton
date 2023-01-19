import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
