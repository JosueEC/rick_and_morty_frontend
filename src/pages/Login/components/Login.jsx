import React from 'react';
import style from '../css-modules/Login.module.css';

export default function Login(){
	return(
		<div className={style.containerLogin}>
			<form>
				<label>Username</label>
				<input type='text' placeholder='Username'></input>
				<label>Password</label>
				<input type='text' placeholder='Password'></input>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}