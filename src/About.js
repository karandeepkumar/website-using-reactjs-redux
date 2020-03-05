import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Hoc from './Hoc';


// const mypara= useReff("");
function About(props){

	return(
		<div>
			<h2>Bold Data is Fetched from Higher Order Component</h2><br/>
			<p>My age is <b>{props.myage}.</b></p>
			<p><b>{props.name}</b></p>
		</div>
		)
}
const StateToProps=(state)=>{

	return {
			myage:state.age
			}

}	


export default Hoc(connect(StateToProps)(About)) ;

// const mapStateToProps=(state)=>{
// 	return {
// 		myname: state.name
// 	}

// }

// return (
// 		<div>
// 		<p>My name is {props.myname}</p>

// 		</div>
// 	)

// }

// export default connect(mapStateToProps)(About)


// useEffect(()=>{

// return fetch("hshsshs").then((response)=>{
// 				response.json()

// }).then((data)=>{
// 	data.name;

// })



// },[])