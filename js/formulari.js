window.onload = function(){

	document.getElementById('formulari').addEventListener('submit',validador);

}

function validador(e) {
  let missatge = "";
  // Definim una variable amb la contrasenya introduïda
	let contrasenya = document.getElementById('contrasenya').value;
  //Definim el patró de la contrasenya en una variable
  let patro = /^[A-Z][a-zA-Z0-9_]*[$]$/;
  // Comprovem que el codi introduït sigui equivalent al establert a la variable
	if(!patro.test(contrasenya)){
    missatge = "Contrasenya incorrecte.";
    e.preventDefault();
	}

  if (document.getElementById('checkRobot').checked == true) {
  } else {
      missatge+=" Ets un robot?";
      e.preventDefault();
  }
  // Incloc una petita comprovació per comprovar què s'introdueix malament
  if (missatge?.trim()){
    alert(missatge);
  }
}
