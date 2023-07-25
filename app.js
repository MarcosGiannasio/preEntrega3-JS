var articulosCarrito = JSON.parse(localStorage.getItem("compras")) || [];
const listaProductos = document.querySelector("#lista-productos");
const carrito = document.querySelector("#carrito");
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');


listaProductos.addEventListener('click', agregarProducto);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
carrito.addEventListener('click', eliminarProducto)


function eliminarProducto(evt){
    evt.preventDefault();
    console.log(evt.target.parentElement)
    if(evt.target.classList.contains('borrar-producto')){
        const producto = evt.target.parentElement.parentElement;
        const productoId = producto.querySelector('a').getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId)
        carritoHTML();
        saveLocal();
    }
}

function vaciarCarrito(){
        while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        localStorage.clear(saveLocal);
    
    }

}

function agregarProducto(evt){
    evt.preventDefault()
    if(evt.target.classList.contains('agregar-carrito')){
        const producto = evt.target.parentElement.parentElement

        leerDatosProducto(producto)
    } 
}

function leerDatosProducto(item){
    const infoProducto = {
        imagen: item.querySelector('img').src,
        titulo: item.querySelector('h4').textContent,
        precio: item.querySelector('.precio span').textContent,
        id: item.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    if(articulosCarrito.some( item => item.id === infoProducto.id)){
        const productos = articulosCarrito.map( producto => {
            if(producto.id === infoProducto.id){
                let cantidad = parseInt(producto.cantidad);
                cantidad +=1;
                producto.cantidad = cantidad
                return producto;
            }else {
                return producto;
            }
        })
        articulosCarrito = productos.slice();
    }else {
        articulosCarrito.push(infoProducto)
    }
    carritoHTML();
    saveLocal();
}

function carritoHTML(){
    vaciarCarrito()
    articulosCarrito.forEach( producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img src="${producto.imagen}" width="100" />
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(fila)
    })

}






// setear info del carrito en el localStorage


const saveLocal = () => {
localStorage.setItem("compras", JSON.stringify(articulosCarrito));
};


// get
JSON.parse(localStorage.getItem("compras"));
