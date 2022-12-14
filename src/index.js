import { fetchOutstandingProducts, fetchAllProducts, fetchAmountOfProducts, fetchAmountOfProductsText } from './lib/fetch.js';
import { searchOrder } from './lib/misPedidos.js';
import { noCollapse, setCopyrightYear } from './lib/util.js';

$(document).ready(function () {
    //Momentaneamente los productos destacados son 3 elegidos aleatoriamente
    fetchOutstandingProducts(3);
    fetchAllProducts(1);
    fetchAmountOfProducts();
    noCollapse();
    setCopyrightYear();
});


$('#orderBtn').click(function () {
    searchOrder($('#order-code').val());
})

//nav productos. Reescribir mas legible
$('#paginationUl').click(function (event) {
    let currentElement = $('#productsIndex');
    let current = parseInt(currentElement.html());
    let indexClicked = $('#'+event.target.id).parent().index();
    let list = $(this).children();
    let size = list.length;
    let prev = 0;
    let next = size - 1;
    //caso donde se esta en el extremo y se quiere avanzar
    list.removeClass("active");
    if(((indexClicked == prev && current == 1) || (indexClicked == next && current == size - 2))){ 
        $(this).children().get(current).classList.add("active");
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


$( '#btn-check-outlined-mayMen' ).on( 'click', function() {
    let label = $('#label-mayMen');
    if( $( '#btn-check-outlined-mayMen' ).is(':checked') ){
        label.html('Mayor a menor');
    }else{
        label.html('Menor a mayor');
    }
    let currentElement = $('#productsIndex');
    let current = parseInt(currentElement.html());
    fetchAllProducts(current);
});

$(window).resize(function() {
    noCollapse();
});

$('#buscarBtn').click(function(){
    $('#cancelarBuscarBtn').removeClass('d-none');
    $('#cancelarBuscarBtn').addClass('d-flex');
    let input = $('#buscarInput');
    $('#buscarHidden').val(input.val());
    $('#paginationUl').children().removeClass("active");
    $('#paginationUl').children().get(1).classList.add("active");
    fetchAmountOfProductsText();
    fetchAllProducts(1);
});

$('#cancelarBuscarBtn').click(function(){
    $('#cancelarBuscarBtn').addClass('d-none');
    $('#cancelarBuscarBtn').removeClass('d-flex');
    $('#buscarInput').val('');
    $('#buscarHidden').val('');
    $('#paginationUl').children().removeClass("active");
    $('#paginationUl').children().get(1).classList.add("active");
    fetchAmountOfProducts();
    fetchAllProducts(1);
});