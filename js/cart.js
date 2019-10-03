let article = {};
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
    <div class="container mt-5">
        <div class="text-center p-4">
            <h2>Mi carrito</h2>
            <p class="lead">Información del artículo</p>
        </div>
        <h3>${articles.name}</h3>
        <hr class="my-3">
        <dl>
            <dt>Cantidad disponible</dt>
            <dd><p>${articles.count}</p></dd>

            <dt>Costo unitario</dt>
            <dd><p class="inline">${articles.currency} $ ${articles.unitCost}</p></dd>
            <div>
            <img class="img-fluid img-thumbnail pt-2 col-lg-3 col-md-3" src="${articles.src}">
            </div>
            <div>
            <dt>Cantidad a comprar</dt>
            <dd><input class="form-control myBlock" type="number" min="0" placeholder="Cantidad"></dd>
            </div>
            <div class="row">
                  <div class="col-md-7 mb-3">
                  <dt>Método de envío</dt>
                  <select class="form-control myBlock">
                    <option value="">Elija un método de envio...</option>
                    <option>Premium (2-5 días) - Costo del 15% sobre el subtotal.</option>
                    <option>Express (5-8 días) - Costo del 7% sobre el subtotal.</option>
                    <option>Standard (12 a 15 días) - Costo del 5% sobre el subtotal.</option>
                  </select>
                </div>
              </div>
        
    </div>
        ` ;
        document.getElementById("showCartArticles").innerHTML = htmlContentToAppend;
    
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            article = resultObj.data.articles[0];
            showArticles(article);
        }
    });
});