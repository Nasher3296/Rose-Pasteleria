import { fetchOutstandingProducts, fetchAllProducts, fetchAmountOfProducts } from './lib/fetch.js';
import { searchOrder } from './lib/other.js';


$(document).ready(function () {
    //Momentaneamente los productos destacados son 3 elegidos aleatoriamente
    fetchOutstandingProducts(3);
    fetchAllProducts(1);
    fetchAmountOfProducts();
});


$('#orderBtn').click(function () {
    searchOrder($('#order-code').val());
})

$('#paginationUl').click(function (event) {
    let currentElement = $('#productsIndex');
    let current = parseInt(currentElement.html());
    let clicked = $('#'+event.target.id); //necesito la selecicon de jquery porque no funciona con el event.target
    let indexClicked = clicked.parent().index();
    let list = $(this).children();
    let size = list.length;
    let prev = 0;
    let next = size - 1;
    //caso donde se esta en el extremo y se quiere avanzar
    list.removeClass("active");
    console.log('current :>> ', current);
    if(((indexClicked == prev && current == 1) || (indexClicked == next && current == size - 2))){ 
        $(this).children().get(current).classList.add("active");
        fetchAllProducts(current);
    }else if(indexClicked == prev){
        currentElement.html(--current);
        fetchAllProducts(current);
        $(this).children().get(current).classList.add("active");
    }else if(indexClicked == next){
        currentElement.html(++current);
        fetchAllProducts(current);
        $(this).children().get(current).classList.add("active");
    }else{
        currentElement.html(indexClicked);
        fetchAllProducts(indexClicked);
        $(this).children().get(indexClicked).classList.add("active");
    }


});


