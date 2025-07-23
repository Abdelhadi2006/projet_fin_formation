import SignUp from './components/SignIn/SignUp';
import Workout from './components/categories/Workout';
import LogIn from './components/SignIn/LogIn';
import MainPage from './MainPage';
import Male from './components/SubPages/Male';
import Female from './components/SubPages/Female';
import Profile from './components/Carousel-Slide/Profile';
import SlideProfile from './components/Carousel-Slide/SlideProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Arnold from './components/ShouldersEx/Arnold';


const App = ()=> {

  const fetchUsers = async ()=>{
    const results = await axios.get("http://localhost:4000/signup")
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
        <Route path="/male" element={<Male />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SlideProfile" element={<SlideProfile />} />
        <Route path="/female" element={<Female />} />
        <Route path="/Arnold" element={<Arnold />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
