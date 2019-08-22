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
                    <div class="d-flex w-100 justify-content-between"> 
                    <h4 class="col-8 row">${product.name}</h4>
                        <p class="row">${product.cost}</p>
                        <p class="row">${product.currency}</p>
                        <p class="row">${product.description}</p>
                    </div>
                <p class="soldCount">${product.soldCount}</p>
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
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            console.log(productsArray);
            showProductsList(productsArray);
        }
    });
});
