import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import RegisterBusiness from "./pages/RegisterBusiness";
import TrackOrder from "./pages/track-order";
import Error from "./pages/Error";
import HomeRider from "./rider/HomeRider";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import BusinessHome from "./pages/BusinessHome";
import CreateOrder from "./pages/CreateOrder";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import BusinessProfile from "./pages/BusinessProfile";
import ProfileRider from "./rider/ProfileRider";
import Rides from "./rider/Rides";
import SignUpRider from "./rider/SignUpRider";
import RideReports from "./rider/RideReports";
import Products from "./pages/Products";
import LandingPage from "./pages/LandingPage";
import LoginB from "./businessPages/Login";
import LogInRider from "./rider/LogInRider";
import Delivery from "./rider/Delivery";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* landing page */}
        <Route exact path="/" element={<LandingPage />} />
        {/* client UI */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/track-orders" element={<TrackOrder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* business owner UI */}
        <Route path="/register/business" element={<RegisterBusiness />} />
        <Route path="/login/business" element={<LoginB />} />
        <Route path="/business/home" element={<BusinessHome />} />
        <Route path="/business/orders" element={<CreateOrder />} />
        <Route path="/business/reports" element={<Reports />} />
        <Route path="/business/profile" element={<BusinessProfile />} />
        <Route path="/products" element={<Products />} />

        {/* rider UI */}
        <Route path="/rider/home" element={<HomeRider />} />
        <Route path="/rider/profile" element={<ProfileRider />} />
        <Route path="/myrides" element={<Rides />} />
        <Route path="/rider/signup" element={<SignUpRider />} />
        <Route path="/rider/login" element={<LogInRider />} />
        <Route path="/rides/reports" element={<RideReports />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
