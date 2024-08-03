function OnLoad() {
    const data = ObtenerProductos();
    console.log(data)

    const body = document.getElementById("productos-body");

    // let -> una varibale que se puede variar
    let i;
    for(i = 0; i < data.length; i++) {
        // tr -> fila
        const tr = document.createElement("tr");

        // td -> columna
        const tdNombre = document.createElement("td");
        // innerHTML -> contenido de la columna
        tdNombre.innerHTML = data[i].nombre

        const tdMarca = document.createElement("td");
        tdMarca.innerHTML = data[i].marca

        const tdPrecio = document.createElement("td");
        tdPrecio.innerHTML = data[i].precio

        // add columns to row
        tr.appendChild(tdNombre);
        tr.appendChild(tdMarca);
        tr.appendChild(tdPrecio);

        body.appendChild(tr);
    }

}


document.onload = OnLoad()