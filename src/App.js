import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';

function Apps() {

  return(
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>
    </BrowserRouter>

  )

}
export default Apps;





//     {props.changename("Banty")}
//   return (

//       <div>
//       <p> My name is {props.myname}</p>
//       <p>My Hobby is playing  {props.myhobby}</p>


//       </div>
//   );
// }

// const mapStateToProps= (state)=>{
//     return {  
//       myname:state.name,
//       myhobby:state.hobby[0]

//     }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return {
//         changename:(name)=>{dispatch({type:"change_name",payload:name})}

//   }
    

// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
