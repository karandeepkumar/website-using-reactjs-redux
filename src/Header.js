import React from 'react';
import ReactDOM from 'react-dom';
import Style from './css/Header.module.css';


function Header(){
	return(
		<div>
			<div className= {Style.header}>
				<p className= {Style.heading}>WET </p>
				<p className= {Style.subheading}> WEB EXPERT TIPS</p>
			</div>
		</div>
		)


}

export default Header;