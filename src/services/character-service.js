// const URL_BASE = 'https://be-a-rym.up.railway.app/api';
// const API_KEY = '274359bf4107.56dbe99b821712ca7118';

// const searchCharacter = (id)=> {
//   fetch(`${URL_BASE}/character/"${id}?key=${API_KEY}`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.name && characterExists(data.name)) {
//         setCharacters((oldChars) => [...oldChars, data]);
//       } else {
//         window.alert(`${data.name} ya esta agregado`);
//       }
//   });
// }

// const characterExists = (id)=>{
//     const exist = characters.filter(character=>{
//       return (character.id === id);
//     });
//     return (exist.length===0);
//   }