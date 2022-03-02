import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemList from "./components/ItemList/ItemList"
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./context/CartContext"
import Payment from "./components/Payment/Payment"
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom" 
import Contact from "./components/Contact/Contact"
import LandingPage from "./components/LandingPage/Langing"
const App = () => {
  return (
      <CartProvider>
      <Router>
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tienda" element={<ItemList />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/:categoryId" element={<ItemList />} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/payment" element={<Payment />} />
      </Routes>
    </div>
      </Router>
    </CartProvider>
  )
}

export default App
