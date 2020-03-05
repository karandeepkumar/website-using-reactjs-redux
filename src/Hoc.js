import React from 'react';

function Hoc(Mycomponent){

	function NewComponent(){

		return (
				<div>
					<Mycomponent name="Hi,this is karan" />
				</div>
				)
	}

	return NewComponent;

}

export default Hoc;


// import React from 'react';

// function Hoc(Mycomponent){

// 	fucntion NewComponent(){


// 		return(
// 			<div>	
// 				<Mycomponent  age="30" />
// 			</div>

// 			)
// 	}

// 		return NewComponent;


// }
// export Hoc(ananan);


//props.name;