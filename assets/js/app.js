document.getElementById("principal").addEventListener("click",function(){
	//primero creo mi input y les doy atributos
	var input = document.createElement('input');//creo mi input donde voy a ingresar las tareas
	input.setAttribute("type", "text");//le digo que sera tipo texto
	input.setAttribute("placeholder", "Título");//escribo el placeholder
	input.classList.add("class", "input_titulo");//agrego clase a mi input para luego darle estilos en css
	input.value;//obtengo el valor ingresado por el usuario

	//segundo creo mi boton con el cual guardare lo que el usuario ingrese en el input
	var boton = document.createElement('button');//creo un nuevo elemento, boton para guardar las tareas
	var tex_boton = document.createTextNode("Guardar");//creo un nodo texto que es lo que va a ir escrito en el boton
	boton.setAttribute("type", "button");//le doy atributo a mi boton y le digo que sera un boton
	boton.classList.add("class", "boton_guardar");//le doy clase para luego darle estilos desde css

	//tercero asigno padre a mis elementos creados
	boton_tareas.appendChild(input);//le informo a input que sera hijo de boton_tareas, es mi div creado en html
	boton_tareas.appendChild(boton);//le informo a boton que sera hijo de boton_tareas, que es mi div creado en mi html
	boton.appendChild(tex_boton);//se informo a mi texto Guardar que sera hijo de mi boton creado en js anteriormente

	boton.addEventListener("click", function(){
		var tareas = document.getElementsByClassName('input_titulo')[0].value;//aca con .value repurero lo que ingreso el usuario, para luego utilizarlo
		document.getElementsByClassName('input_titulo')[0].value = "";//aca le indico que una vez ya rescatado lo ingresado, quede limpio nuevamente mi input
		console.log(tareas);
	})
})//fin funcion