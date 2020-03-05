
export const NewNameAction=()=>{

	return (dispatch)=>{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then((response)=>{
			return response.json();
		}).then((data)=>{
			dispatch({type:"change_name",payload:data[0].name})

		})	
	}

}

export const changeUserEmail=()=>{

	return (dispatch)=>{
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response)=>{
				return response.json();
				})
			.then((data)=>{
				dispatch({type:"change_user&email",
							payload:[data[0].email]
				}
					)}
				)

	}
}