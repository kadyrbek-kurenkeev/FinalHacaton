import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./components/Context/ProductContext";
import AuthContextProvider from "./components/Context/AuthContext";
import CheckOutContextProvider from "./components/Context/CheckOutContextProvider";
import CartContextProvider from "./components/Context/CartContextProvider";
import LikeContextProvider from "./components/Context/LikeContextProvider";

function App() {
  return (
    <div>
      <LikeContextProvider>
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
      </LikeContextProvider>
    </div>
  );
}

export default App;
