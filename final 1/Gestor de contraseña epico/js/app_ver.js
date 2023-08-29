var id = 0;

document.addEventListener("DOMContentLoaded", function () {
    const listaRegistros = document.getElementById("lista-registros");
    function cargarRegistros() {
        const registros = JSON.parse(localStorage.getItem("registros")) || [];
        listaRegistros.innerHTML = '';

        registros.forEach((registro, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span id="${id++}">${registro.nombre} - ${registro.descripcion} - ${registro.contraseña}</span>
                <button class="eliminar-btn" onclick="eliminar();">Eliminar</button>
            `;
            listaRegistros.appendChild(listItem);
        });
    }

    function eliminarRegistro(index) {
        const registros = JSON.parse(localStorage.getItem("registros")) || [];

        registros.splice(index, 1);

        localStorage.setItem("registros", JSON.stringify(registros));

        cargarRegistros();
    }

    function eliminarTodos() {
        // Borrar todos los registros del almacenamiento local
        localStorage.removeItem("registros");

        // Recargar la lista de registros
        cargarRegistros();
    }

    cargarRegistros();

    // Agrega la función eliminarTodos al botón correspondiente
    const eliminarTodosBtn = document.querySelector(".eliminar-todos-btn");
    eliminarTodosBtn.addEventListener("click", eliminarTodos);
});

function volver() {
    window.history.back();
}
function eliminar() {
    for (let index = 0; index <20; index++) {
            if (index == id) {
                console.log("yez")
            }else{
                console.log("no")
            }
        
    }
}
