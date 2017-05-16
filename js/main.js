function validateForm(){
	// se crea el span
	var mensaje = document.createElement("span");
	
	function nombre (){
		// validacion input
		var nombre = document.getElementById("name").value;
		// span
		var nodoPadre = document.getElementsByClassName("name-container input-box")[0];

		// validar si el nombre esta vacio
		if (nombre=="" || nombre == undefined || nombre.length == 0) {
			var nombreVacio = document.createTextNode("Error: Debe ingresar un nombre");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombreVacio);
		}
		// validar si la primera letra es mayuscula
		else if (nombre.charAt(0)!=nombre.charAt(0).toUpperCase()) {
			var nombreMayus = document.createTextNode("Error: Su nombre no tiene la inicial en mayúscula");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombreMayus);
		}
		// validar solo letras
		else if (!/^[a-zA-Z]*$/.test(nombre)) {
			var nombreNum = document.createTextNode("Error: El nombre no debe llevar números");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombreNum);
		}
	}
	nombre();

	function apellido (){
		// validacion input
		var apellido = document.getElementById("lastname").value;
		// span
		var nodoPadre = document.getElementsByClassName("lastname-container input-box")[0];
		
		// validar si el nombre esta vacio
		if (apellido=="" || apellido == undefined || apellido.length == 0) {
			var apellVacio = document.createTextNode("Error: Debe ingresar un apellido");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(apellVacio);
		}
		// validar si la primera letra es mayuscula
		else if (apellido.charAt(0)!=apellido.charAt(0).toUpperCase()) {
			var apellMayus = document.createTextNode("Error: Su nombre no tiene la inicial en mayúscula");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(apellMayus);
		}
		// validar solo letras
		else if (!/^[a-zA-Z]*$/.test(apellido)) {
			var apellNum = document.createTextNode("Error: El nombre no debe llevar números");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(apellNum);
		}
	}
	apellido();

	function correo (){
		// input
		var correo = document.getElementById("input-email").value;

		// span
		var nodoPadre = document.getElementsByClassName("email-container input-box")[0];

		//validar si el nombre esta vacio
		if (correo=="" || correo == undefined || correo.length == 0) {
			var emailVacio = document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(emailVacio);
		}
		// validar si tiene el formato correo
		else if (!/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(correo)) {
			var incorrectEmail= document.createTextNode("El formato de su correo es incorrecto ");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(incorrectEmail);
		}
	}
	correo();

	function password () {
		//input
		var pass = document.getElementById("input-password").value;
		// span
		var nodoPadre = document.getElementsByClassName("form-group input-box")[0];

		// validar que tenga al menos 6 caracteres
		if(pass.length<6){
			var pass_pass = document.createTextNode("Su contraseña debe tener al menos 6 caracteres");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(pass_pass);
		}

		// validar que no sea :
		else if (pass==="password" || pass==="123456" || pass==="0987654") {
			var pass_pass = document.createTextNode("Error: Su contraseña no puede ser 'password', '123456' o '098754'");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(pass_pass);
		}
	}
	password ();

	function listaOpciones (){
		// validacion input
		var opcion = document.getElementsByTagName("select");

		// span
		var nodoPadre = document.getElementsByClassName("form-group input-box")[1];

		// recorrer arreglo de opciones
		for (var i = 0; i < opcion.length; i++) {
			if(opcion[i].value=="0"){
				var index_msj = document.createTextNode("Error: Debe seleccionar al menos una opción");
				nodoPadre.appendChild(mensaje);
				mensaje.appendChild(index_msj);	
			}
		}
	}
	listaOpciones ();

}