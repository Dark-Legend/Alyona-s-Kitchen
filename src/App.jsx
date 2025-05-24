import { Route, Routes } from "react-router-dom";
import { Navbar } from "./pages/Home/Navbar/Navbar";
import { Footer } from "./pages/Home/Footer/Footer";
import { lazy, Suspense } from "react";

const Home = lazy(() =>
  import("./pages/Home/Home").then((module) => ({ default: module.Home }))
);
const Menu = lazy(() =>
  import("./pages/Menu/Menu").then((module) => ({ default: module.Menu }))
);
const Food = lazy(() =>
  import("./pages/Food/Food").then((module) => ({ default: module.Food }))
);
const Cart = lazy(() =>
  import("./pages/Cart/Cart").then((module) => ({ default: module.Cart }))
);
const Checkout = lazy(() =>
  import("./pages/Checkout/Checkout").then((module) => ({
    default: module.Checkout,
  }))
);

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/food/:id" element={<Food />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
