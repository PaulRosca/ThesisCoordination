import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Login from './pages/Login'
import { useState } from 'react'

export default function App() {
  const [userData, setUserData] = useState(null)
  const getRoutes = () => {
    switch(userData?.type) {
      case 'student':
        return null;
      default:
        return (<Route path="*" element={<Login setUserData={setUserData}/>}/>);
    }
  }
  return (
    <>
      {
        userData && (<NavBar userData={userData} setUserData={setUserData} />)
      }
      <BrowserRouter>
        <Routes>
          {getRoutes()}
        </Routes>
      </BrowserRouter>
    </>
  )
}
