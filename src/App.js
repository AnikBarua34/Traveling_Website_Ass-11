import './App.css';
import Home from './pages/HomeItems/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AuthProvider from './pages/Context/AuthProvider';
import Header from './pages/Shared/Header/Header';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking';
import AboutUs from './pages/HomeItems/AboutUs/AboutUs';
import Login from './pages/HomeItems/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import FreeOffers from './pages/HomeItems/FreeOffers/FreeOffers';
import AddPackages from './pages/HomeItems/AddAPackage/AddPackages';
import BookedPlaces from './pages/HomeItems/BookedPlaces/BookedPlaces';
import ManageAllOrders from './pages/HomeItems/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>

      <Switch>
<Route exact path="/">
<Home></Home>
</Route>

<Route  path="/home">
<Home></Home>
</Route>

<PrivateRoute path="/booking/:serviceId">
  <Booking></Booking>
</PrivateRoute>

<PrivateRoute path="/Offers">
<FreeOffers></FreeOffers>
</PrivateRoute>

<PrivateRoute path="/bookedplaces">
<BookedPlaces></BookedPlaces>
</PrivateRoute>

<PrivateRoute path="/manageall">
<ManageAllOrders></ManageAllOrders>
</PrivateRoute>

<PrivateRoute path="/addpackage">
<AddPackages></AddPackages>
</PrivateRoute>

<Route path="/about">
<AboutUs></AboutUs>
</Route>

<Route path="/login">
<Login></Login>
</Route>



<Route path="*">
<NotFound></NotFound>
</Route>
      </Switch>
      </BrowserRouter>
      <Footer></Footer>
        </AuthProvider>
    </div>
  );
}

export default App;
