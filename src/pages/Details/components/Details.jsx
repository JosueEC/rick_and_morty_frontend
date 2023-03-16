import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details(){
  const [character, setCharacter] = useState({});
  const { detailID } = useParams();

  useEffect(()=>{
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const API_KEY = '274359bf4107.56dbe99b821712ca7118';
    
    axios(`${URL_BASE}/character/${detailID}?key=${API_KEY}`)
    .then((response)=>{
      setCharacter(response.data);
    });
  },[]);
    

  return(
    <div>
      {character.name ?(
        <>
          <h2>Ficha del personaje {detailID}</h2>
			    <h2>{character.name}</h2>
          <h2>{character.status}</h2>
			    <h2>{character.species}</h2>
			    <h2>{character.gender}</h2>
          <h2>{character.origin?.name}</h2>
          <img src={character.image} alt='foto'></img>
        </>
      ) : (
        <h3>Loading...</h3>
      )
      }
    </div>
  );
}