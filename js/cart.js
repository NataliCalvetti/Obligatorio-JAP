let productUnitCost = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";
let product = {};

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
			</div>
		</div>
    </main>
      <div class="modal fade" tabindex="-1" role="dialog" id="contidionsModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Forma de pago</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container">
                  <div class="row">
                    <div class="custom-control custom-radio">
                      <input id="creditCardPaymentRadio" name="paymentType" type="radio" class="custom-control-input">
                      <label class="custom-control-label" for="creditCardPaymentRadio">Tarjeta de crédito</label>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="shippingStreet">Número de tarjeta</label>
                      <input type="text" class="form-control" id="creditCardNumber" placeholder="" value="" >
                      <div class="invalid-feedback">
                        Ingresa un número de tarjeta
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="shippingStreetNumber">Código de seg.</label>
                      <input type="number" class="form-control" id="creditCardSecurityCode" placeholder="" value="" >
                      <div class="invalid-feedback">
                        Ingresa el código de seguridad
                      </div>
                    </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="dueDate">Vencimiento (MM/AA)</label>
                        <input type="text" class="form-control" id="dueDate" placeholder="" value="" >
                        <div class="invalid-feedback">
                          Ingresa la fecha de vencimiento
                        </div>
                      </div>
                  </div>
                  <div class="row">
                    <div class="custom-control custom-radio">
                      <input id="bankingRadio" name="paymentType" type="radio" class="custom-control-input">
                      <label class="custom-control-label" for="bankingRadio">Transferencia bancaria</label>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="bankAccountNumber">Número de cuenta</label>
                      <input type="text" class="form-control" id="bankAccountNumber" placeholder="" value="" >
                      <div class="invalid-feedback">
                        Ingresa un número de cuenta
                      </div>
                    </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
        ` 
        document.getElementById("showCartArticule").innerHTML = htmlContentToAppend;
    
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