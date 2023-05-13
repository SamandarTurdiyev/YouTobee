import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';

import { auth } from './firebase';

import Layout from './Layout/layout';
import Home from "./pages/Home/Home";
import Trending from './pages/Trending/Trending';
import Subscriptions from './pages/Subscriptions/Subscriptions';
import Library from './pages/Library/Library';
import History from './pages/History/History';
import WatchLater from './pages/WatchLater/WatchLater';
import Favourites from './pages/Favourites/Favourites';
import LikedVideos from './pages/LikedVideos/LikedVideos';
import Music from './pages/Music/Music';
import Games from './pages/Games/Games';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SinglePage from './pages/SinglePage/SinglePage';



function App() {

  const [user, setUser] = useState(null)

  const unSubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    } else{
      setUser(null)
    }

    return unSubscribe
  }, [])

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout user={user} />} >
          <Route path='/'  element={<Home/>}/>
          <Route path='/trending'  element={<Trending/>}/>
          <Route path='/subscriptions'  element={user ?  <Subscriptions/> : <Navigate to="/login" />}/>  
          <Route path='/library'  element={<Library/>}/>
          <Route path='/history'  element={<History/>}/>
          <Route path='/watchLater'  element={<WatchLater/>}/>
          <Route path='/favourites'  element={<Favourites/>}/>
          <Route path='/likedVideos'  element={<LikedVideos/>}/>
          <Route path='/music'  element={<Music/>}/>
          <Route path='/games'  element={<Games/>}/>
      </Route>
      <Route path='/login' element={user ? <Navigate to="/"/> : <Login/>}/>
      <Route path='/register' element={user ? <Navigate to="/login"/> : <Register/> }/>
      <Route path="/singlepage" element={<SinglePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
