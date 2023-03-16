import React from 'react';
import Cards from '../../Characters/components/Cards';
import style from '../css-modules/Favorites.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { orderCards,filterCards } from '../../../redux/actions';

export default function Favorites(){
	const myFavorites = useSelector(state=>state.myFavorites);
  console.log('myFavorites', myFavorites);
  const dispatch = useDispatch();

  function handleOrder(event){
    dispatch(orderCards(event.target.value));
  }

  function handleFilter(event){
    dispatch(filterCards(event.target.value));
  }

  return(
    <div>
      <div className={style.containerFilters}>
        <select name='' onChange={handleOrder}>
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
        </select>

        <select name='' onChange={handleFilter}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
          <option value='All Favorites'>All Favorites</option>
        </select>

      </div>
      <Cards characters={myFavorites}/>
    </div>
  );
}