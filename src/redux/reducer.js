import {GET_CHARACTERS} from './actions';

const InitialState = {
	myFavorites: [],
	allCharacters: [],
	defaultCharacters: []
}

const rootReducer = (state=InitialState,action)=>{
	switch(action.type){
		case GET_CHARACTERS:
			return{
				...state,
				defaultCharacters:action.payload
			}
		case 'ADD_FAVORITE':
			return {
				...state, 
				myFavorites: [...state.allCharacters,action.payload],
				allCharacters: [...state.myFavorites, action.payload]
			}
		case 'DELETE_FAVORITE':
			return {
				...state,
				myFavorites:state.myFavorites.filter((character)=>{
					return (character.id !== action.payload);
				})
			}
		case 'FILTER':
			if(action.payload==='All Favorites'){
				return {
					...state,
					myFavorites: state.allCharacters
				}
			}else{
				return {
					...state,
					myFavorites: state.allCharacters.filter(character=>{
						return (character.gender === action.payload);
					})
				}
			}
		case 'ORDER':
			if(action.payload === 'Ascendente'){
				state.myFavorites.sort((a,b)=>{return a.id-b.id});
			}else if(action.payload === 'Descendente'){
				state.myFavorites.sort((a,b)=>{return b.id-a.id});
			}

			return {
				...state,
				myFavorites: state.myFavorites
			}
		default:
			return {
				...state
			}
	}
}

export default rootReducer;