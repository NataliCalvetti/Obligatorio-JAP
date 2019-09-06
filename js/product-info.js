var product = {};

function showProduct(product){

        const htmlContentToAppend = `
        <div class="container mt-5">
        <div class="text-center p-4">
            <h2>Descripción del Producto</h2>
            <p class="lead">Encontrarás aquí toda la información acerca del Producto seleccionado.</p>
        </div>
        <h3>${product.name}</h3>
        <hr class="my-3">
        <dl>
            <dt>Descripción</dt>
            <dd><p>${product.description}</p></dd>

            <dt>Precio</dt>
            <dd><p class="inline">${product.currency} $ ${product.cost}</p></dd>

            <dt>Vendidos</dt>
            <dd><p>${product.soldCount}</p></dd>

            <dt>Categoría</dt>
            <dd><p>${product.category}</p></dd>
        </dl>
    </div>
        `

        document.getElementById("showCarProduct").innerHTML = htmlContentToAppend;
    }


    function showImagesGallery(array){

        let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i]; 
        htmlContentToAppend +=`

            <img class="img-fluid img-thumbnail pt-2 col-lg-3 col-md-3" src="${imageSrc}">
                `
    }
        document.getElementById("showImagesGallery").innerHTML = htmlContentToAppend;
    }


    

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            showProduct(product);
            showImagesGallery(product.images);
        }
    });
});