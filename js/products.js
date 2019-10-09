const gridRow = {
    firstDiv: "row",
    secondDiv: "col-3",
    thirdDiv: "col",
    fourthDiv: "d-flex w-100 justify-content-between col-8 row"
};
const gridCol = {
    firstDiv: "container",
    secondDiv: "row justify-content-start",
    thirdDiv: "col-4",
    fourthDiv: "col-4"

};
let currentGrid = gridRow;

var productsArray = []; 
const ORDER_ASC_BY_PRICE = "min";
const ORDER_DESC_BY_PRICE = "max";
var currentSortCriteria = ORDER_ASC_BY_PRICE;
var minCost = undefined;
var maxCost = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }
    return result;
}

function gridFormat(criteria){
    if(criteria === 'row'){
        currentGrid = gridRow;
    }
    if(criteria === 'col'){
        currentGrid = gridCol;
    }
    showProductsList(productsArray);
};

document.getElementById("rowGrid").addEventListener("click", function(){
    gridFormat('row');
});
document.getElementById("colGrid").addEventListener("click", function(){
    gridFormat('col');
});


function showProductsList(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let product = array[i];

        htmlContentToAppend += `
        <a href="category-info.html" class="list-group-item list-group-item-action">
        <div class="${currentGrid.firstDiv}" > 
            <div class="${currentGrid.secondDiv}"> <img class="smallImg img-thumbnail" src="${product.imgSrc}"> </div>
                <div class="${currentGrid.thirdDiv}">
                    <div class="${currentGrid.fourthDiv}"> 
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

function sortAndShowProducts(sortCriteria, array){
    currentSortCriteria = sortCriteria;
    let products = array;

    products = sortProducts(currentSortCriteria, products);

    //Muestro las categorías ordenadas
    showProductsList(products);
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

    document.getElementById("sortCrece").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PRICE, productsArray);
    });

    document.getElementById("sortDecrece").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_PRICE, productsArray);
    });


    document.getElementById("rangeFilterCost").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        const min = document.getElementById("rangeFilterCostMin").value;
        const max = document.getElementById("rangeFilterCostMax").value;

        if ((min != undefined) && (min != "") && (parseInt(min)) >= 0){
            minCost = parseInt(min);
        }

        if ((max != undefined) && (max != "") && (parseInt(max)) >= 0){
            maxCost = parseInt(max);
        }

        filterProducts();
    
    });

    function filterProducts(){
        const filterArray = productsArray.filter((product)=>{  
            if (!maxCost){
                if (minCost){
                    return product.cost >= minCost;
                }
            else {
               return true;
            }    
            }
            else {
                if(!minCost){
                    return product.cost <= maxCost;
                }
            else {
                return product.cost <= maxCost && product.cost >= minCost;
            }    
            }
        });
        sortAndShowProducts(currentSortCriteria, filterArray); 
    }