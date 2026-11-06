const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const btnDisminuir = document.getElementById("btn-disminuir");
const btnReset = document.getElementById("btn-reset");
const tablaCuerpo = document.getElementById("tabla-cuerpo");

let likes = 0;

// Incrementar
boton.addEventListener("click", () => {
    likes++;
    textoContador.textContent = likes;
    
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString();

    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td class="cell-numero">${likes}</td>
        <td class="cell-hora">${horaFormateada}</td>
    `;
    tablaCuerpo.insertBefore(nuevaFila, tablaCuerpo.firstChild);
});

// Restar (Reto 1)
btnDisminuir.addEventListener("click", () => {
    if (likes > 0) {
        likes--;
        textoContador.textContent = likes;

        const ahora = new Date();
        const horaFormateada = ahora.toLocaleTimeString();

        const nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML = `
            <td class="cell-numero">${likes}</td>
            <td class="cell-hora">${horaFormateada}</td>
        `;
        tablaCuerpo.insertBefore(nuevaFila, tablaCuerpo.firstChild);
    }
});

// Reiniciar (Reto 1)
btnReset.addEventListener("click", () => {
    likes = 0;
    textoContador.textContent = likes;
    tablaCuerpo.innerHTML = "";
});