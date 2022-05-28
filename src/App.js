import { Routes, Route } from "react-router-dom";

import React from "react";
import Navigation from "./routes/navigation/navigation.compoent";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <div>i am shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
