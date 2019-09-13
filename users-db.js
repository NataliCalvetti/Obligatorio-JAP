

document.addEventListener('DOMContentLoaded', (event) =>{
    const info = localStorage.getItem('usuario');
    let htmlContentToAppend = '';
    if (info){
        htmlContentToAppend =`
        <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${info}
        </button>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="cart.html">Mi carrito</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" onclick="remove()" id="cerrarSesion" href="autenticacion.html">Cerrar Sesión</a>
        </div>
        </div>
        `
    } else { 
        htmlContentToAppend =`
    <div class="btn-group">
    <button type="button" class="btn btn-danger">
    <a href="autenticacion.html"> Sign In </a>
    </button>
    </div>
    `
    }
    document.getElementById("addBoton").innerHTML = htmlContentToAppend;
});

function remove () {
    localStorage.removeItem('usuario');
};






