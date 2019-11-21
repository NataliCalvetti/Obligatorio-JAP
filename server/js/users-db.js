

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
        <a class="dropdown-item" href="http://localhost:5000/cart">Mi carrito</a>
        <div class="dropdown-divider"></div>
        <div style = "display:none" align="middle" class="g-signin2" data-cookiepolicy='single_host_origin' data-onsuccess="onSignIn"></div>
        <a class="dropdown-item" onclick="remove()" id="cerrarSesion" href="http://localhost:5000/autenticacion">Cerrar Sesión</a>
        </div>
        </div>
        `
    } else { 
        htmlContentToAppend =`
    <div class="btn-group">
    <button type="button" class="btn btn-danger">
    <a href="http://localhost:5000/autenticacion"> Sign In </a>
    </button>
    </div>
    `
    }
    document.getElementById("addBoton").innerHTML = htmlContentToAppend;
});

function remove () {
    localStorage.removeItem('usuario');
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        auth2.disconnect();
});

}






