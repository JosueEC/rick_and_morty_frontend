import axios from "axios";

export const GET_CHARACTERS = 'GET_CHARACTERS';

const getCharacters = ()=>{
	const URL_BASE = 'https://be-a-rym.up.railway.app/api';
  const API_KEY = '274359bf4107.56dbe99b821712ca7118';

	return function(dispatch){
		axios(`${URL_BASE}/character/?key=${API_KEY}`)
    .then(data=>{
      dispatch({type: GET_CHARACTERS, payload: data.data.info.results});
    })
  }
}

const addFavorite = (character)=>{
  return {
		type: 'ADD_FAVORITE',
		payload: character
	}
}

const deleteFavorite = (id)=>{
	return {
		type: 'DELETE_FAVORITE',
		payload: id
		}
}

const filterCards = (gender)=>{
	return {
		type: 'FILTER',
		payload:gender
	}
}

const orderCards = (id)=>{
	return {
		type: 'ORDER',
		payload: id
	}
}

export {
	getCharacters,
	addFavorite,
	deleteFavorite,
	filterCards,
	orderCards
}