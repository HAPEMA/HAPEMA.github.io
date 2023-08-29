document.addEventListener("DOMContentLoaded", function () {
    const guardarBtn = document.getElementById("guarda--contra");
    const verBtn = document.getElementById("ver--contra");

    guardarBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const contraseña = document.getElementById("contraseña").value;

        // Obtener registros existentes o inicializar una lista vacía
        const registros = JSON.parse(localStorage.getItem("registros")) || [];

        // Agregar el nuevo registro a la lista
        registros.push({
            nombre: nombre,
            descripcion: descripcion,
            contraseña: contraseña
        });

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem("registros", JSON.stringify(registros));

        // Limpiar campos después de guardar
        document.getElementById("nombre").value = '';
        document.getElementById("descripcion").value = '';
        document.getElementById("contraseña").value = '';
    });

    verBtn.addEventListener("click", function () {
        // Redirigir a la página que muestra la contraseña
        window.location.href = "ver_contra.html";
    });
});
