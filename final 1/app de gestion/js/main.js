
// abrir y cerrar ventana emergente
const abrir = document.getElementById("agregar");
const ventana = document.getElementById("emergente");
const cerrar = document.getElementById("cerrar");
/*abre la ventana emergente*/
abrir.onclick = function abrir() {
  ventana.style.visibility = "visible"; 
  console.log(1)/*si imprime "1" la funcion se ejecuto*/
}

//funcion para mostrar la nuevas tareas
cerrar.onclick = function () {
    console.log(2)/*si imprime "2" la funcion se ejecuto*/
    crear_tareas()
    mostrar();
}
const h3 = document.getElementById("titulo");
const desc = document.getElementById("desc");
const tipo = document.getElementById("tipo");
const fecha =document.getElementById('fecha')

const ul = document.querySelector("ul");
/*funcion para crear elementos */
function crear_tareas(e) {
  if (h3.value !="" ){/*si el titulo de la tarea tiene contenido, se ejecuta la funcion*/
    const entrega = fecha.value;
    const li = document.createElement("li");
    const titulo = document.createElement("h3");
    titulo.textContent = h3.value;

    const descripcion = document.createElement("p");
    descripcion.textContent = desc.value;
    descripcion.classList.add('descripcion')

    const eleccion = document.createElement("h3");
    eleccion.textContent = 'prioridad:' + tipo.value;

    const date = document.createElement("h3");
    date.textContent = 'Entrega: ' + entrega;

    li.appendChild(titulo);
    li.appendChild(descripcion);
    li.appendChild(eleccion);
    li.appendChild(date);
    
    ul.appendChild(li);
    ventana.style.visibility = "hidden"; 
  }
  else{
    alert("ingrese un titulo");
  }
  };


  /*cierra la ventana de agregar tareas*/
  function ocultar() {
    ventana.style.visibility = "hidden";
  }

  /*funcion solo para verificar el funcionamiento y toma de datos*/
  function mostrar() {
    console.log(h3.value)
    console.log(desc.value)
    console.log(tipo.value)
    console.log(date.val)
    console.log("si se imprimen todos los datos, programa funciona correctamente")
  }
/*----------------------------------------------CREACION DE ELEMENTOS:PAGINA DE TODAS LAS TAREAS-----------------------------------------------------*/

