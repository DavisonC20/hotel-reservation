import React from 'react'
import Header from '../Components/Header/Header'
import 'rsuite/dist/rsuite-no-reset.min.css';
import BarTitles from '../Components/BarTitles/BarTitles';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Header/>
    <main>
      <BarTitles titleBar={'Hoteles Disponibles'}/>
      <Outlet/>
    </main>
    </>
  )
}

export default App