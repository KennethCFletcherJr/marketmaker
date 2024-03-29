import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainView from "./views/MainView.jsx";
import ItemDetail from './views/ItemDetail.jsx';
import ItemUpdate from './views/ItemUpdate.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/items/:id/details" element={<ItemDetail />} />
          <Route path="/items/:id/edit" element={<ItemUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App