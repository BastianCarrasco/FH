// Crear el arreglo vacío
let productos = [];

// Función para agregar un elemento al arreglo
export function agregarElemento(nombre, tipo, precio) {
    const nuevoElemento = { nombre, tipo, precio };
    productos.push(nuevoElemento);
}

// Función para quitar un elemento del arreglo por nombre
export function quitarElemento(nombre) {
    productos = productos.filter(producto => producto.nombre !== nombre);
}

// Función para modificar un elemento del arreglo por nombre
export function modificarElemento(nombre, nuevoNombre, nuevoTipo, nuevoPrecio) {
    const indice = productos.findIndex(producto => producto.nombre === nombre);
    if (indice !== -1) {
        productos[indice] = { nombre: nuevoNombre, tipo: nuevoTipo, precio: nuevoPrecio };
    }
}
