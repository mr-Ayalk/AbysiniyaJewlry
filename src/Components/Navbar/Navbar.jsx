import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo_1.webp';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <img src={logo} alt="" width={40} />
        <p>Abyssinia  Jewelry</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Mens")}>
          <Link style={{ textDecoration: 'none' }} to="/mens">Cultural</Link>
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Womens")}>
          <Link style={{ textDecoration: 'none' }} to="/womens">Modern</Link>
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link style={{ textDecoration: 'none' }} to="/kids">Custom</Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><a href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} size="2x"  /> 
          </a></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;





























// import React, { useState } from 'react'
// import './Navbar.css'
// import logo from '../Assets/logo_1.webp'
// import cart_icon from '../Assets/cart1.png'
// import { Link } from 'react-router-dom';
// function Navbar() {
//   const [menu,setMenu]=useState("shop");
//   return (
//     <div className='navbar'>
//       <div className="nav-logo">
//         <img src={logo} alt="" width={50} />
//         <p>AAIT E-Commerce</p>
//       </div>
//       <ul className="nav-menu">
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>  Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         <Link to='/login'><button>Login</button></Link>
//         {/* <Link to='/cart'><img src={cart_icon} alt="" /></Link> */}
//         <Link to='/cart'><h1>🛒</h1>  </Link>
        
//         <div className="nav-cart-count">0</div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
