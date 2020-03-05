
	export const ageReducer= (state="" , action)=> {
		
		return state;
	}
	

	export const contactReducer=(state="",action)=>{

		if(action.type=== "change_user&email"){

			return action.payload
		}

			return state;

	}

	export const nameReducer= (state="", action)=>{
		if(action.type==='change_name'){

			return action.payload	
		}
		return state;
	}

