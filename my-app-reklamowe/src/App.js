import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import styled from "styled-components";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProductPage from "./pages/Product";
import LoginPage from "./pages/Login";
import CartPage from "./pages/Cart";
import Header from './components/Header/Header'

import { NewsProvider } from "./contexts/bestcellery";

const GlobalContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1750px;
  padding: 0rem 1.5rem;
`;

function App() {
  return (
    <div>
      <BrowserRouter>
      <NewsProvider>
        <Header/>
        <Navigation />
        <GlobalContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/products/:category/:item?" element={<ProductPage/>} />
          </Routes>
        </GlobalContainer>
        </NewsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
