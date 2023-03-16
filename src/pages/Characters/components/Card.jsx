import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../css-modules/Card.module.css';
import Portal from '../assets/portal1.png';

import { addFavorite,deleteFavorite } from '../../../redux/actions';

export default function Card(props){
	const {onClose:closeCharacter} = props;
	const {id,name,species,gender,image} = props;

	const myFavorites = useSelector(state=>state.myFavorites);

	const dispatch = useDispatch();
	const [isFav,setIsFav] = useState(false);

	function handleFavorite(event){
		if(isFav){
			setIsFav(false);
			dispatch(deleteFavorite(id));
		}else{
			setIsFav(true);
			dispatch(addFavorite(props));
		} 
	}

	useEffect(()=>{
		myFavorites.forEach(character => {
			if(character.id === id){
				setIsFav(true);
			}
		});
	},[myFavorites]);

  return(
		<div className={styles.containerCard}>

		{
			isFav ? (
				<button onClick={handleFavorite} className={styles.buttonFav}>❤️</button>
			) : (
				<button onClick={handleFavorite} className={styles.buttonFav}>🤍</button>
			)
		}
		
				<button onClick={()=>closeCharacter(id)} className={styles.buttonClose}>X</button>
		<Link to={`/details/${id}`} className={styles.link}>
			<div className={styles.boxImg}>
				<img className={styles.portal} src={Portal} alt='portal'></img>
				<img src={image} alt='foto'></img>
			</div>
			<div className={styles.boxContent}>
				<span>{name}</span>
				<span>{species}</span>
				<span>{gender}</span>
			</div>
		</Link>

    </div>
  );
}