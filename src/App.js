import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Client from './pages/Client'
import About from './pages/About'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>React Context</h1>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home teste={'testando'}/>}/>
        <Route path='/client' element={<Client />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
