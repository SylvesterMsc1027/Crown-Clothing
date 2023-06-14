import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./component/routes/navigation/NavigationBar";
import Home from "./component/routes/home/Home.component";
import Shop from "./component/routes/shop/Shop.component";
import Contact from "./component/routes/contact/Contact";
import Authentication from './component/routes/Authentication/Authentication.component'
import CheckOut from "./component/CheckOut/CheckOut.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="Shop/*" element={<Shop />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
