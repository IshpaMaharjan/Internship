import React from 'react';
<<<<<<< HEAD
import Home from './components/Home';
import './App.css';
import { Button, ButtonGroup } from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-top">

          <div className="logo">Etsy</div>

          {/* Categories Dropdown */}
          <Menu>
            <MenuButton className="categories-btn">
              <i className="fas fa-bars"></i> Categories
            </MenuButton>

            <MenuList className="categories-dropdown">
              <MenuItem>Accessories</MenuItem>
              <MenuItem>Art & Collectibles</MenuItem>
              <MenuItem>Baby</MenuItem>
              <MenuItem>Bags & Purses</MenuItem>
              <MenuItem>Bath & Beauty</MenuItem>
              <MenuItem>Books, Movies & Music</MenuItem>
              <MenuItem>Clothing</MenuItem>
              <MenuItem>Craft Supplies & Tools</MenuItem>
              <MenuItem>Electronics & Accessories</MenuItem>
              <MenuItem>Gifts</MenuItem>
              <MenuItem>Home & Living</MenuItem>
              <MenuItem>Jewelry</MenuItem>
            </MenuList>
          </Menu>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for anything"
              className="search-input"
            />

            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="nav-icons">
            <button className="icon-button">
              <i className="fas fa-user"></i>
              <span>Sign in</span>
            </button>

            <button className="icon-button">
              <i className="fas fa-heart"></i>
            </button>

            <button className="icon-button">
              <i className="fas fa-gift"></i>
            </button>

            <button className="icon-button">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>

        <nav className="main-nav">
          <a href="/" ><i className="fas fa-gift"></i> Gifts</a>
          <a href="/">Housewarming Gifts</a>
          <a href="/">Home Favorites</a>
          <a href="/">Fashion Finds</a>
          <a href="/">Registry</a>
        </nav>
      </header>

      <Home />
      
      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Shop</h3>
              <ul>
                <li><a href="/">Gifts</a></li>
                <li><a href="/">Home Favorites</a></li>
                <li><a href="/">Fashion Finds</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>About</h3>
              <ul>
                <li><a href="/">Our Story</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Press</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Help</h3>
              <ul>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Shipping</a></li>
                <li><a href="/">Returns</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Etsy, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
=======
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Connections from './pages/Connections';
import AddConnection from './pages/AddConnection';
import ConnectionDetails from './pages/ConnectionDetails';
import Profile from './pages/Profile';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useAuth } from './context/AuthContext';

function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="connections" element={<RequireAuth><Connections /></RequireAuth>} />
        <Route path="add" element={<RequireAuth><AddConnection /></RequireAuth>} />
        <Route path="connection/:id" element={<RequireAuth><ConnectionDetails /></RequireAuth>} />
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
>>>>>>> 7d407f7015e4d83d8849d6c136458eed869d7b06
