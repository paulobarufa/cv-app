import { useState } from "react"
import "./styles/App.css"
import Nav from "./Nav.jsx"
import Panel from "./Panel.jsx";
import View from "./View.jsx";
import Modal from "./Modal.jsx";

function App() {

  const [activeNav, setActiveNav] = useState(0);
  const [details, setDetails] = useState({});
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <>
      {modalOpen && <Modal 
        setModalOpen={setModalOpen} 
        modalState={activeNav} 
        details={details} 
        setDetails={setDetails} 
      />}
      <div className="app-container">

        <div className="nav-wrapper">
          <Nav activeIndex={activeNav} setActiveIndex={setActiveNav} />
        </div>
        <div className="main-wrapper">
          <div className="input-wrapper">
            <Panel details={details} setDetails={setDetails} activeIndex={activeNav} openModal={openModal} />
          </div>
          <div className="view-wrapper">
            <View details={details} />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
