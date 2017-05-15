function validateForm(){
	/* Escribe tú código aquí */
	function nombre (){
		var nombre = document.getElementById("name").value;
		// validar si el nombre esta vacio
		if (nombre=="" || nombre == undefined || nombre.length == 0) {
			var spanNombre = document.getElementById("span_nombre");
			spanNombre.innerHTML = "Error: " 
		}
		// validar si la primera letra es mayuscula
		else if (nombre.charAt(0)!=nombre.charAt(0).toUpperCase()) {
			alert("esto deberia ser un span + mayuscula + nombre");
		}
		// validar solo letras
		else if (!/[a-zA-Z]/.test(nombre)) {
			alert("esto deberia ser un span + solo letras + nombre");
		}
	}
	nombre();

	function apellido (){
		var apellido = document.getElementById("lastname").value;
		// validar si el nombre esta vacio
		if (apellido=="" || apellido == undefined || apellido.length == 0) {
			alert("esto deberia ser un span + vacio + apellido");
		}
		// validar si la primera letra es mayuscula
		else if (apellido.charAt(0)!=apellido.charAt(0).toUpperCase()) {
			alert("esto deberia ser un span + mayuscula + apellido");
		}
		// validar solo letras
		else if (!/[a-zA-Z]/.test(apellido)) {
			alert("esto deberia ser un span + letras + apellido");
		}
	}
	apellido();

	function correo (){
		var correo = document.getElementById("input-email").value;
		//validar si el nombre esta vacio
		if (correo=="" || correo == undefined || correo.length == 0) {
			alert("esto deberia ser un span + vacio + correo");
		}
		// validar si tiene el formato correo
		else if (!/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(correo)) {
			alert("esto deberia ser un span + letras + no es correo");
		}
	}
	correo();

	function password () {
		var pass = document.getElementById("input-password").value;
		// validar que tenga al menos 6 caracteres
		if(pass.length<6){
			alert("esto deberia ser un span + pass + 6>");
		}
		else if (pass==="password" || pass==="123456" || pass==="0987654") {
			alert("esto deberia ser un span + pass + password-123456-0987654");
		}
	}
	password ();

	function listaOpciones (){
		var opcion = document.getElementsByTagName("select");
		for (var i = 0; i < opcion.length; i++) {
			if(opcion[i].value=="0"){
				alert("esto deberia ser un span + opcion + escoja");
			}
		}
	}
	listaOpciones ()

}