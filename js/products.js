var productsArray = []; 

function sortProducts(criteria, array){

}

function showProductsList(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let product = array[i];

        htmlContentToAppend += `
        <a href="category-info.html" class="list-group-item list-group-item-action">
        <div class="row" > 
            <div class="col-3"> <img class="smallImg img-thumbnail" src="${product.imgSrc}"> </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between col-8 row"> 
                        <h4 class="mb-1">${product.name}</h4>
                    </div>
                     <div>
                        <p>${product.description}</p>
                     </div> 
                     <div class="alignRight"> 
                        <p class="inline">${product.currency} $ ${product.cost}</p>
                        <p class="soldCount">${product.soldCount} Vendidos</p>
                    </div>
                </div>
            </div>
        </a>
        `

        document.getElementById("productList").innerHTML = htmlContentToAppend;
    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(jsonResult){
        if (jsonResult.status === "ok")
        {
            productsArray = jsonResult.data;
            showProductsList(productsArray);
        }
    });
});
