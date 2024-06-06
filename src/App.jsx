import Header from "./components/Header";
import Home from "./components/Home";
import Steps from "./components/Steps";
import SubHeader from "./components/SubHeader";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [modalIsView,setModalisView] = useState(false);
  const modalOpen = () =>{
    setModalisView(true);
  }

  const closeModal = () =>{
    setModalisView(false);
  }
  return (<>
    <Header />
    <SubHeader/>
    <main className="w-full">
      <Home onView={modalOpen}/>
      <Steps/>
    </main>
    {modalIsView && <Modal onClose={closeModal} />}
  </>
  )
}

export default App
