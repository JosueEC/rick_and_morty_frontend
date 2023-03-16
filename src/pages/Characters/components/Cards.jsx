import React, { useEffect } from 'react';
import Card from './Card';
import style from '../css-modules/Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../../redux/actions';
import { useLocation } from 'react-router-dom';
import { pathFavorites } from '../../../adapters/routePaths';

export default function Cards(props){
	const {characters} = props;
  // console.log('Characters',characters);
	const {onClose:closeCharacter} = props;
  const location = useLocation();
  const charactersDefault = useSelector(state=>state.defaultCharacters);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCharacters());
  }, []);

  return(
    <div className={style.containerCards}>

    {
      (location.pathname===pathFavorites)?(
        characters.map(({id,name,species,gender,image})=>{
        return <Card
					key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={closeCharacter}
        />
      })
      ) : (
        charactersDefault.map(({id,name,species,gender,image})=>{
        return <Card
					key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={closeCharacter}
        />
      })
      )
    }
    </div>
  );
}