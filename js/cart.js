let articule = {};
let productUnitCost = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){

}

function updateSubtotal(){

}

function showPaymentTypeNotSelected(){

}

function hidePaymentTypeNotSelected(){

}

function showArticles(articles){
    const htmlContentToAppend = `
    <main role="main">
    <div class="text-center p-4">
            <h2>Mi carrito</h2>
    <div class="container mt-5"></div>
    <p class="lead">Ingresa los datos del artículo a vender.</p>
        <div class="row justify-content-md-center">
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Información del producto</h4>
            <form class="needs-validation" id="sell-info">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="productName">Nombre</label>
                  <input type="text" class="form-control" id="productName" placeholder="" value="" >
                  <div class="invalid-feedback">
                    Ingresa un nombre
                  </div>
                </div>
              </div>
              </div>
              </div>
    </main>
        ` 
        document.getElementById("showCartArticules").innerHTML = htmlContentToAppend;
    
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            showArticles(resultObj.data);
        }
    });
});