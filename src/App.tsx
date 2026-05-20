import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Settings from "./pages/Settings"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
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
