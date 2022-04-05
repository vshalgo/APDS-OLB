import logo from './logo.svg';
import { 
  BrowserRouter,
  Routes, 
  Route 
} from 'react-router-dom';

// import pages
import Home from './pages/Home'
import About from './pages/About'
import RegisterBusiness from './pages/RegisterBusiness'
import Orders from './pages/track-order'
import Error from './pages/Error'

//import components
import Navbar from './component/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path = '/' element = {<Home/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/register' element = {<RegisterBusiness/>} />
        <Route path = '/track-orders' element = {<Orders/>} />
        <Route path = '*' element = {<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
