import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./components/Context/ProductContext";
import AuthContextProvider from "./components/Context/AuthContext";
import CheckOutContextProvider from "./components/Context/CheckOutContextProvider";
import CartContextProvider from "./components/Context/CartContextProvider";

function App() {
  return (
    <div>
      <CheckOutContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <AuthContextProvider>
              <Navbar />
              <MainRoutes />
              <Footer />
            </AuthContextProvider>
          </ProductContextProvider>
        </CartContextProvider>
      </CheckOutContextProvider>
    </div>
  );
}

export default App;
