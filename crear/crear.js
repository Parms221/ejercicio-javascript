// GET -> Obtener


function OnFormSubmit(event) {
    // Evita el comportamiento por default de "form"
    event.preventDefault();

    const data = new FormData(event.target);
    
    // data -> obtener el valor con la denominación ""
    const nombreProducto = data.get("nombre")
    const marcaProducto = data.get("marca")
    const precioProducto = data.get("precio")

    CrearProducto(nombreProducto, marcaProducto, precioProducto)
    window.location.replace("/")
}

function OnLoad() {
    const form = document.getElementById("form-producto");
    form.addEventListener("submit", OnFormSubmit)
}


document.onload = OnLoad()