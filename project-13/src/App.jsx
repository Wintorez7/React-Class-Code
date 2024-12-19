import Navbar from "./component/Navbar"
import Card from "./component/Card"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";

function App() {


  return (
    // <>
    // <Navbar/>
    // <Card/>
    // </>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path="*" element={<h1 className="text-center">404 - Page Not Found</h1>} />
        {/* <Route path="/product/:id" element={<ProductDetails/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
