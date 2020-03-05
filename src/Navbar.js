import React from 'react';
import {Link} from 'react-router-dom';
import  Styles from './css/Navbar.module.css';

function Navbar(){

	return(
			<div className={Styles.nav}>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="About" >About</Link></li>
					<li><Link to="Contact">Contact</Link></li>
				</ul>
			</div>

		)
}

export default Navbar;