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
// import Navbar from './component/Navbar'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import BusinessHome from './pages/BusinessHome';
import CreateOrder from './pages/CreateOrder';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import BusinessProfile from './pages/BusinessProfile';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/track-orders" element={<Orders />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path="*" element={<Error />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/business" element={<RegisterBusiness />} />
        <Route path="/business/home" element={<BusinessHome />} />
        <Route path="/business/orders" element={<CreateOrder />} />
        <Route path="/business/reports" element={<Reports />} />
        <Route path='/business/profile' element={<BusinessProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
