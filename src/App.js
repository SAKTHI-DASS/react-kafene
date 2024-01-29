import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import OrderList from "./Pages/Order/OrderList";
import Products from "./Pages/Products/Products";
import { User } from "./Pages/Users/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/order" element={<OrderList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
