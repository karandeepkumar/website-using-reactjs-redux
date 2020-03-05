
import React from 'react';
import {useState, useEffect} from 'react';
import Style from './css/Contact.module.css';

function Home(){ 

	const [Joke,Setjoke]= useState("Loading Joke...")
	const [fname,setFname]=useState("Karan")
	const [lname,setLname]= useState("Deep")

	const getjoke= (first,last)=>{

		fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`)
		.then(response=>{ return response.json(); })
		.then(data=>{ Setjoke(data.value.joke); })
			
		}	

useEffect(()=>{

	getjoke(fname,lname);

},[]);
	return (
		<div>
			<h2>It's Time For Some Entertainment</h2><br/>
			<p className={Style.subhead}>Enter Your First Name & Last Name and get a Joke related to you. </p><br/>
			<div className={Style.form}>
				<label>First Name:</label>
				<input type="text" value={fname} onChange={(e)=>setFname(e.target.value)}/> <br/>
				<label>Last Name:</label>
				<input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/> <br/><br/>
				<button onClick={()=>getjoke(fname,lname)}>Get Joke</button><br/><br/>
				<hr/>
				<h4>{Joke}</h4>
			</div>
			
		</div>
		
	)
}



export default Home;



// ===============previeous code below without hooks useSelector and useDispatch

// function Home(props){

// 	{props.newName()}
// 	return(
// 			<div> 
// 				<p>My name is {props.myname}</p>
// 			</div>
// 		)
// }

// const StateToProps=(state)=>{

// return {
// 			myname:state.name
// 		}	
// }

// const ChangeNameValue=(changeName)=>{
// 	return {	
// 		newName:()=>{changeName(NewNameAction())}
// 		}
// }

// export default connect(StateToProps,ChangeNameValue)(Home);

