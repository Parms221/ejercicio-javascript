// Aqui va a estar nuestro CRUD
// C = CREATE
// R = READ
// U = UPDATE
// D = DELETESS

function ObtenerProductos() {
    const productos = localStorage.getItem("productosv2")

    // Cuando no encuentra la key "productosv2"
    if (productos == null) {
        // Array/Lista vacia
        return []
    }

    // Devuelvo los datos que estaban en el localStorage
    return JSON.parse(productos);
}


function CrearProducto(nombreProducto, marcaProducto, precioProducto) {
    const lista = ObtenerProductos();
    
    // Objecto -> cualquier cosa

    // """"Parecido"""" a POO (Progración Orientada a Objectos)
    const producto = {
        nombre: nombreProducto,
        marca: marcaProducto,
        precio: precioProducto
    }

    // Añadiendo un nuevo producto a la lista
    lista.push(producto)

    localStorage.setItem("productosv2", JSON.stringify(lista))
}