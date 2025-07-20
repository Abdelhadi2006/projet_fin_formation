import SignUp from './components/SignIn/SignUp';
import Workout from './components/categories/Workout';
import LogIn from './components/SignIn/LogIn';
import MainPage from './MainPage';
import Male from './Male';
import Female from './Female';
import Profile from './Profile';
import SlideProfile from './components/SlideProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const App = ()=> {

  const fetchUsers = async ()=>{
    const results = await axios.get("http://localhost:4000/SignUp")
    console.log(results)
  }


  useEffect(()=>{
    fetchUsers();
  }, [])

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Male" element={<Male />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SlideProfile" element={<SlideProfile />} />
        <Route path="/Female" element={<Female />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
