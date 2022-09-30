import {fetchOutstandingProducts, fetchAllProducts, fetchAmountOfProducts} from './lib/fetch.js';
import {searchOrder} from './lib/other.js';
import * as util from './lib/util.js';

$(document).ready(function () {
    //Momentaneamente los productos destacados son 3 elegidos aleatoriamente
    fetchOutstandingProducts(3);
    fetchAllProducts(1);
    fetchAmountOfProducts();
});


$('#orderBtn').click(function(){
    searchOrder($('#order-code').val());
})




$('#paginationUl').click( function(event) {
    let lastActive = $("#paginationUl .active").index();
    let nextActive = $('#paginationUl li').index();
    console.log("last: "+lastActive);
    console.log("mext: "+nextActive);
    $('#paginationUl li').removeClass("active");
    
    let target = util.getEventTarget(event);
    
    switch (target.innerHTML[1]) {
        case 'l':
            fetchAllProducts(2);
            // target.parentNode.classList.add("active");
            break;
        case 'g':
            fetchAllProducts(2);
            // target.parentNode.classList.add("active");
            break;
        default:
            target.parentNode.classList.add("active");
            fetchAllProducts(parseInt(target.innerHTML));
            break;
    }    
});

