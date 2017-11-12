
//Primera parte-----creando todo desde js

//Tengo que crear un div que va a contener a un label, que a su vez tendrá un texto adentro
var container = document.createElement("div"); // div contenedor
container.setAttribute("id","contenedor");//Al div debo entregarle un atributo y un valor

var label = document.createElement("label"); //label que irá dentro del div contenedor
label.setAttribute("id","texlabel");

//necesito que label tenga dentro un texto, por eso creo un nodo texto
var anadirLista = document.createTextNode("Añadir lista");//El texto que se mostrará en pantalla, es el texto que va entre comillas

//añadiendo mis nodos al dom
//necesito colocar el nodo texto en label y label en mi div contenedor
label.appendChild(anadirLista); //el padre contiene al hijo
container.appendChild(label);
//con esto añado 
document.body.appendChild(container);

//Segunda parte-----
//Tengo que crear un div, un input, un botón, el texto dentro del botón y un ícono X. Todo esto, va dentro de mi primer div
var ventana = document.createElement("div"); //div contenedor
ventana.setAttribute("id","vent"); //atributo de div

var input = document.createElement("input");//input
input.setAttribute("id","inp"); //primero le doy un id
input.setAttribute("placeholder","Añadir una lista"); //luego le doy un placeholder, porque ahí irá el texto que se muestra en pantalla

var boton = document.createElement("button"); //botón
boton.setAttribute("id","btn"); //le doy un id?(preguntar)

var guardar = document.createTextNode("guardar"); //nodo texto que irá dentro del botón y será visible en pantalla

var icono = document.createElement("i");//para que esto aparezca, debo añadir la carpeta de íconos
icono.classList.add("fa","fa-times"); //por qué classlist y no setAttribute?(preguntar) por qué add??? 


//Ahora, posiciono mis nuevos elementos en el arbol dom dentro de la función(por qué? preguntar)
function add(){
	//ícono, botón e input van dentro de ventana y el texto va dentro del botón
	ventana.appendChild(input);
	ventana.appendChild(boton);
	boton.appendChild(guardar);
	ventana.appendChild(icono);

//Ahora necesito colocar mi segundo div(ventana) en mi primer div(container) - container es el padre de ventana
	container.appendChild(ventana);
//con este estilo, el label desaparece y aparece mi ventana sola
	label.style.display = "none"; //por qué lo hago dentro de mi función? PREGUNTAR
//cierro mi función
}


//como tenemos que hacer click en lable para que ocurra "algo", tenemos que llamar a su id y lo volvemos varialble
var llamarLabel = document.getElementById("texlabel");//aquí va el id de label

//Ahora, al hacer click, debo hacer que el evento ocurra
llamarLabel.addEventListener("click",add); //click es lo que ocurre, lo que escucha el documento para crear el evento

//----------------------------------------

boton.addEventListener("click", function(){

	var segundaVentana = document.createElement("div");//mi segunda ventana
	segundaVentana.setAttribute("id","segVent");

	var segundoLabel = document.createElement("label");
	segundoLabel.setAttribute("id","segLabel");

	//con este valor estoy rescatando lo que va en mi input?
	var texlabel = document.getElementById("inp").value;
	var textoVacio = document.createTextNode(texlabel);

	var miA = document.createElement("a");
	miA.setAttribute("href","#");

	var addCard = document.createTextNode("Add a card...");

	container.appendChild(segundaVentana);//agregué mi segundo div al div general
	segundaVentana.appendChild(segundoLabel);
	segundoLabel.appendChild(textoVacio);
	segundaVentana.appendChild(miA);
	miA.appendChild(addCard);

	//------------------------------------------
	
	

	});


	//addCard.addEventListener("click",function(){
	
	//div chico añadir tarjeta
	var terceraVentana = document.createElement("div")
	terceraVentana.setAttribute("id","terVent");

	var textarea = document.createElement("textarea");
	textarea.setAttribute()
	var segundoBoton = document.createElement("button");


	//pongo el ícono x que ya extiste afuera como hijo del div
	container.appendChild(terceraVentana);//mi div chico lo pongo en el contenedor general
	terceraVentana.appendChild(icono);
	terceraVentana.appendChild(segundoBoton);
	terceraVentana.appendChild(textarea);

//});
//display none en js para el div más pequeño

 //necesitamos un div que encierre a la segunda parte
//crear funcion onclick para que aparezca
 //div

 //necesitamos dos label
 //un textarea
 //un botón añadir
 //y la X se llama
 //hacer un a

 //después se hace una nueva función para
 //que aparezca nuevamente y el evento se repita varias veces

 //un div que encierre text area botón e ícono



