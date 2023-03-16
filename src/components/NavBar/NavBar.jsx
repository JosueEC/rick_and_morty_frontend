import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';

import {pathAbout, 
		 		pathCharacters, 
				pathContact, 
				pathFavorites, 
				pathHome, 
				pathLogin } from '../../adapters/routePaths';

export default function NavBar(props){
	const {onSearch:searchCharacter} = props;

	return(
		<header>
			<nav className={style.nav}>
				<label className={style.logo}>
					<Link to={pathHome} className={style.logo}>Rick & Morty</Link>
				</label>

				<ul>

					<li>
						<Link to={pathLogin} className={style.link}>LOGIN</Link>
					</li>
					<li>
						<Link to={pathHome} className={style.link}>HOME</Link>
					</li>
					<li>
						<Link to={pathCharacters} className={style.link}>CHARACTERS</Link>
					</li>
					<li>
						<Link to={pathFavorites} className={style.link}>FAVORITES</Link>
					</li>
					<li>
						<Link to={pathAbout} className={style.link}>ABOUT</Link>
					</li>
					<li>
						<Link to={pathContact} className={style.link}>CONTACT</Link>
					</li>
					<li>
						<SearchBar onSearch={searchCharacter}/>
					</li>

				</ul>
			</nav>
		</header>
	);
}