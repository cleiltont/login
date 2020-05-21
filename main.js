let usuario = document.querySelector('input[name=user]');
let senha = document.querySelector('input[name=pass]');
let entrar= document.querySelector('input[name=login]');

let bloco= document.querySelector('div');

entrar.onclick = function(){
	if(usuario.value === 'admin' & senha.value === 'admin'){
		//localStorage.setItem('user', usuario.value);
		//ocalStorage.setItem('pass', senha.value);
		bloco.style.display = 'none';
	} else{
		alert('Errado');
	}
}