//-------------Joke--------------------



const names = ["José Manuel", "José María", "Jesus Manuel", "Jean Bonbon", "Manuel José", "José Juan", "Juan José", "José Javier", "Javier María", "Jooooooseee Maaaaaanueeeel", "Jota", "Miguel Estéban", "José Teekis"];
const avatarList = ["https://w0.peakpx.com/wallpaper/546/904/HD-wallpaper-spaghetti-cheese-pasta-food.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mentha_piperita_-_Flickr_-_aspidoscelis_%281%29.jpg"];
const btnRandom = document.getElementById("btnRandom");
let randomName=names[Math.floor(Math.random() * names.length)];
let avatarPic = avatarList[Math.floor(Math.random() * avatarList.length)];


function randomize() {


  const randomIndex = Math.floor(Math.random() * names.length);
  const randomIndexPfps = Math.floor(Math.random() * avatarList.length);
  randomName = names[randomIndex];

  randomName.textContent = randomName;

  avatarPic= avatarList[randomIndexPfps];
}

//---------------------------------------

//--------------LISTA EJERCICIOS------------
// Array de ejercicios
/*const ejercicios = [
  html[
  { Nombre: "Web Repostería", Descripcion: "Esta web es sobre repostería, hecho durante los primeros días del curso.", Link: "https://codepen.io/jotaDCC/pen/MYyqMRX" },
  { Nombre: "Relaciones de aspecto", Descripcion: "Este es un test de Relaciones de Aspecto.", Link: "https://codepen.io/jotaDCC/pen/jEqQENL" },
  { Nombre: "El Color", Descripcion: "Un test de color básico.", Link: "https://codepen.io/jotaDCC/pen/qEZMwQN" },
  { Nombre: "Flex", Descripcion: "Este es un test de Flex Layout junto con unas animaciones.", Link: "https://codepen.io/jotaDCC/pen/jEqQPZj" }
  ],

  css[
  { Nombre: "Backgrounds", Descripcion: "Testeando las funciones de Background.", Link: "https://codepen.io/jotaDCC/pen/jEqjpOm" },
  { Nombre: "Ajedrez", Descripcion: "Esta prueba simula un tablero de ajedrez durante el primer movimiento.", Link: "https://codepen.io/jotaDCC/pen/PwzYymB" },
  { Nombre: "Escuela de Diseño", Descripcion: "Este proyecto simula una web para una escuela de diseño.", Link: "https://codepen.io/jotaDCC/pen/gbMYZYr" },
  { Nombre: "Examen 29/12/2025", Descripcion: "Examen realizado en 29/12/2025.", Link: "https://codepen.io/jotaDCC/pen/JoKdbPq" }
  ],

  JavaScript[
  { Nombre: "Lista de Coches con Búsqueda", Descripcion: "Esta lista utiliza una pseudo búsqueda en su Código JS.", Link: "https://codepen.io/jotaDCC/pen/gbMLmjG" },
  { Nombre: "Pokemonator", Descripcion: "En esta lista podrás añadir Pokémon", Link: "https://codepen.io/jotaDCC/pen/VYjKgzx" },
  { Nombre: "Llanfair Botones", Descripcion: "Esta página te enseña a leer el largo nombre del pueblo de Gales.", Link: "https://codepen.io/jotaDCC/pen/wBWoRXp" },
  { Nombre: "Contador de palabras", Descripcion: "¡Un contador de palabras que no cuenta espacios!", Link: "https://codepen.io/jotaDCC/pen/gbMgyNR" }
  ]

];*/

const portfolioJoseM = {
  alumno: {
    nombre: randomName,
    apellido: 'Menéndez',
    nick: '@Jota',
    avatar: avatarPic,
    descripcion: 'Hola, soy J, estoy aprendiendo HTML y CSS en Dicampus.',
    redes: [
      { red: 'codepen', url: 'https://codepen.io/jotaDCC' },
      { red: 'github', url: 'https://github.com/JotaMMF' },
      { red: 'email', url: 'mailto:josemanuelcursillos@mail.com' }
    ]
  },
  html: [
    {
      img: 'https://picsum.photos/id/1/200/200',
      titulo: 'Web Repostería',
      descripcion: 'Web dedicada a la repostería realizada durante los primeros días del curso.',
      fecha: '2025-12-01',
      url: 'https://codepen.io/jotaDCC/pen/MYyqMRX'
    },
    {
      img: 'https://picsum.photos/id/1/200/200',
      titulo: 'Relaciones de Aspecto',
      descripcion: 'Ejercicio práctico para probar relaciones de aspecto en diseño web.',
      fecha: '2025-12-02',
      url: 'https://codepen.io/jotaDCC/pen/jEqQENL'
    },
    {
      img: 'https://picsum.photos/id/1/200/200',
      titulo: 'El Color',
      descripcion: 'Test básico para trabajar y comprender el uso del color.',
      fecha: '2025-12-03',
      url: 'https://codepen.io/jotaDCC/pen/qEZMwQN'
    },
    {
      img: 'https://picsum.photos/id/1/200/200',
      titulo: 'Flex Layout',
      descripcion: 'Prueba de Flexbox combinada con animaciones CSS.',
      fecha: '2025-12-04',
      url: 'https://codepen.io/jotaDCC/pen/jEqQPZj'
    }
  ],

  css: [
    {
      img: 'https://picsum.photos/id/10/200/200',
      titulo: 'Backgrounds',
      descripcion: 'Ejercicio para testear distintas funciones de background en CSS.',
      fecha: '2025-12-10',
      url: 'https://codepen.io/jotaDCC/pen/jEqjpOm'
    },
    {
      img: 'https://picsum.photos/id/20/200/200',
      titulo: 'Tablero de Ajedrez',
      descripcion: 'Simulación de un tablero de ajedrez con el primer movimiento.',
      fecha: '2025-12-12',
      url: 'https://codepen.io/jotaDCC/pen/PwzYymB'
    },
    {
      img: 'https://picsum.photos/id/10/200/200',
      titulo: 'Escuela de Diseño',
      descripcion: 'Proyecto que simula una web corporativa para una escuela de diseño.',
      fecha: '2025-12-15',
      url: 'https://codepen.io/jotaDCC/pen/gbMYZYr'
    },
    {
      img: 'https://picsum.photos/id/20/200/200',
      titulo: 'Examen CSS 29/12/2025',
      descripcion: 'Examen práctico de CSS realizado el 29 de diciembre de 2025.',
      fecha: '2025-12-29',
      url: 'https://codepen.io/jotaDCC/pen/JoKdbPq'
    }
  ],

  js: [
    {
      img: 'https://picsum.photos/id/60/200/200',
      titulo: 'Lista de Coches',
      descripcion: 'Listado de coches con sistema de búsqueda implementado en JavaScript.',
      fecha: '2026-01-05',
      url: 'https://codepen.io/jotaDCC/pen/gbMLmjG'
    },
    {
      img: 'https://picsum.photos/id/160/200/200',
      titulo: 'Pokemonator',
      descripcion: 'Aplicación para añadir Pokémon dinámicamente mediante JavaScript.',
      fecha: '2026-01-08',
      url: 'https://codepen.io/jotaDCC/pen/VYjKgzx'
    },
    {
      img: 'https://picsum.photos/id/60/200/200',
      titulo: 'Llanfair Botones',
      descripcion: 'Ejercicio interactivo para aprender a leer el largo nombre de un pueblo galés.',
      fecha: '2026-01-12',
      url: 'https://codepen.io/jotaDCC/pen/wBWoRXp'
    },
    {
      img: 'https://picsum.photos/id/160/200/200',
      titulo: 'Contador de Palabras',
      descripcion: 'Contador de palabras que ignora los espacios en el recuento.',
      fecha: '2026-01-15',
      url: 'https://codepen.io/jotaDCC/pen/gbMgyNR'
    }
  ]
};




function cargar(datos){
	//DATOS ALUMNO
	//capturamos y almacenamos los datos en variable/constante
	const nombre=datos.alumno.nombre;
	const apellido=datos.alumno.apellido;
	const nombrecompleto = nombre + " "+apellido;
	
	const avatar=datos.alumno.avatar;
	const descripcion=datos.alumno.descripcion;
	const nick=datos.alumno.nick;

	
	//Mostramos en pantalla lo almacenamo en variable/constante
	document.querySelector('#nombre').innerHTML=nombrecompleto;
	document.querySelector('#avatar').src=avatar;
	document.querySelector('#descripcion').innerHTML=descripcion;
	document.querySelector('#nick').innerHTML=nick;
	
	//Desplegamos Redes
	
	let misRedes='';
	for(let i=0; i<datos.alumno.redes.length; i++){
		misRedes+=`<li><a href="${datos.alumno.redes[i].url}" class="${datos.alumno.redes[i].red}">${datos.alumno.redes[i].red}</a></li>`;
	}
	document.querySelector('#redes').innerHTML=misRedes;

	//////////////----- 
	///////////// ----- Ejercicios
	/////////////
	
	
	//Ejercicio HTML
	let miHTML='';
	for(let i =0; i<datos.html.length; i++){
		miHTML+=`<li>
			<img src="${datos.html[i].img}">
			<h3>${datos.html[i].titulo}</h3>
			<p>${datos.html[i].descripcion}</p>
			<span>${datos.html[i].fecha}</span>
			<a href="${datos.html[i].url}" class="btn">Ver ejercicio</a>
		</li>`;
	}
	//imprimimos ejercicios HTML
	document.querySelector('#html').innerHTML=miHTML;

	
	//Ejercicio CSS
	let miCSS='';
	for(let i =0; i<datos.css.length; i++){
		miCSS+=`<li>
			<img src="${datos.css[i].img}">
			<h3>${datos.css[i].titulo}</h3>
			<p>${datos.css[i].descripcion}</p>
			<span>${datos.css[i].fecha}</span>
			<a href="${datos.css[i].url}" class="btn">Ver ejercicio</a>
		</li>`;
	}
	//imprimimos ejercicios CSS
	document.querySelector('#css').innerHTML=miCSS;

	//Ejercicio JS
	let miJS='';
		for(let i =0; i<datos.js.length; i++){
		miJS+=`<li>
			<img src="${datos.js[i].img}">
			<h3>${datos.js[i].titulo}</h3>
			<p>${datos.js[i].descripcion}</p>
			<span>${datos.js[i].fecha}</span>
			<a href="${datos.js[i].url}" class="btn">Ver ejercicio</a>
		</li>`;
	}
	//imprimimos ejercicios JS
	document.querySelector('#js').innerHTML=miJS;


}











//view controller

//lista,grid ,tabla
function vista(tipo) {
  // Asigna el nombre de la clase directamente al body
  document.body.className = tipo;
}


cargar(portfolioJoseM);

// Crea un componente dado el tipo y el contenido
/*function crearComp(content, tipo = "div", parametro = 0, valorParametro = 0) {
  let elemento = document.createElement(tipo);
  elemento.setAttribute(parametro, valorParametro);
}


let lista = document.createElement("li");
lista.appendChild(document.createTextNode("Lorem Ipsum"));
document.getElementById("listaEjercicios").appendChild(lista);*/
