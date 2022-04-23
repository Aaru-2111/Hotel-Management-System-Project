import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <nav>
		<div class="logo">
			<p>Grand Hotel</p>
		</div>
		<ul>
			
			<li><a href="">Rooms</a></li>
			<li><a href="">Location</a></li>
			<li><a href="">contact us</a></li>
			<li class="nav-item"><a class="nav-link" href="registration.html">Login/Registration</a>
			  </li>
		</ul>
	</nav>
    </div>
  )
}

export default Header
