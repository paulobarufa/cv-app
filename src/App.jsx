import { useState } from "react"
import "./styles/App.css"
import Nav from "./Nav.jsx"
import Panel from "./Panel.jsx";
import View from "./View.jsx";

function App() {

  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="app-container">
      <div className="nav-wrapper">
        <Nav activeIndex={activeNav} setActiveIndex={setActiveNav}/>
      </div>
      <div className="main-wrapper">
        <div className="input-wrapper">
          <Panel />
        </div>
        <div className="view-wrapper">
          <View />
        </div>
      </div>
    </div>
    
  )
}

export default App
