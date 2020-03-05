import React from 'react';
import ReactDOM from 'react-dom';
// import {connect} from "react-redux";
import {useSelector, useDispatch} from 'react-redux';
import {NewNameAction, changeUserEmail} from './actions/actions';

function Contact(){

	const states= useSelector((state)=>{

		return state;
	}) 

	const dispatch= useDispatch();
		dispatch(NewNameAction());
		dispatch(changeUserEmail());

	return (
		<div>
			<h2>Data is fetched from online API</h2>
			<p>My name is {states.name}</p>
			<p>My age is {states.age}</p>
			<p>My email is {states.email}</p> 
		</div>	
		)

}

export default Contact;


// import React from 'react';
// import {useState, useEffect} from 'react';
// import Style from './css/Contact.module.css';

// function Contact(){ 

// 	const [Joke,Setjoke]= useState("Loading Joke...")
// 	const [fname,setFname]=useState("Karan")
// 	const [lname,setLname]= useState("Deep")

// 	const getjoke= (first,last)=>{

// 		fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`)
// 		.then(response=>{ return response.json(); })
// 		.then(data=>{ Setjoke(data.value.joke); })
			
// 		}	

// useEffect(()=>{

// 	getjoke(fname,lname);

// },[]);
// 	return (
// 		<div>
// 			<h2>It's Time For Some Entertainment</h2><br/>
// 			<p className={Style.subhead}>Enter Your First Name & Last Name and get Joke related to you. </p><br/>
// 			<div className={Style.form}>
// 				<label>First Name:</label>
// 				<input type="text" value={fname} onChange={(e)=>setFname(e.target.value)}/> <br/>
// 				<label>Last Name:</label>
// 				<input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/> <br/><br/>
// 				<button onClick={()=>getjoke(fname,lname)}>Get Joke</button><br/><br/>
// 				<hr/>
// 				<h4>{Joke}</h4>
// 			</div>
			
// 		</div>
		
// 	)
// }



// export default Contact;