import React from 'react';
import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props){
	const {onSearch:searchCharacter} = props;
	const [id,setId] = useState('');

	function handleChange(event){
		const value = event.target.value;
		setId(value);
	}

	function handleClick(event){
		searchCharacter(id);
	}

  return(
    <div className={style.containerSearchBar}>
			<input type="text" onChange={handleChange} className={style.input}></input>
			<button onClick={handleClick} className={style.buttonSearch}>Buscar</button>
    </div>
  );
}