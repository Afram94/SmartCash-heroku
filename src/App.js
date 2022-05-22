import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Std_Master from './Master/Std_Master';
import Home from './Pages/Home';
import Erbjudande from './Pages/Erbjudande';
import Inlosenavtal from './Pages/Inlosenavtal';
import OmOss from './Pages/OmOss';
import Kontakt from './Pages/Kontakt';
import Restaurant_products from './Pages/Restaurant_products';
import Beauty_products from './Pages/Beauty_products';
import RestaurantAndCafe from './Pages/ Offers/RestaurantAndCafe';
import BeautyAndHealth from './Pages/ Offers/BeautyAndHealth';
import GroceryStores from './Pages/ Offers/GroceryStores';
import CheckOut from './Pages/CheckOut';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/erbjudande" element={<Erbjudande />} /> */}
        <Route exact path="/restaurant-and-cafe" element={<RestaurantAndCafe />} />
        <Route exact path="/beauty-and-health" element={<BeautyAndHealth />} />
        <Route exact path="/grocery-stores" element={<GroceryStores />} />
        <Route exact path="/inlosenavtal" element={<Inlosenavtal />} />
        <Route exact path="/om_oss" element={<OmOss />} />
        <Route exact path="/kontakt" element={<Kontakt />} />
        <Route exact path="/restaurant-products" element={<Restaurant_products />} />
        <Route exact path="/beauty-products" element={<Beauty_products />} />

        <Route exact path="/check-out" element={<CheckOut />} />


        {/* <Route exact path="/restaurant-and-cafe" element={<RestaurantAndCafe />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
