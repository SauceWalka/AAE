import "./index.css"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import FAQ from "./pages/FAQ"
import { Route, Routes } from "react-router-dom"

function App() {
  return <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/Temp" elements= {<Home />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </div>
  </>
}

export default App;
