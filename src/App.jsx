import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.js"
import About from "./pages/About.jsx"
import Settings from "./pages/Settings.jsx"
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
