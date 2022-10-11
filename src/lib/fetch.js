import {appendOutstandingProduct, appendProductsList, appendProductsNav} from './append.js';

var max = 4;

export function fetchOutstandingProducts(n) {
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            [...data].sort(() => 0.5 - Math.random()).slice(0, n).forEach(e => {
                appendOutstandingProduct(e);
            });
        })
}

export function fetchAllProducts(n) {
    n--;
    $(".products-list").html("");
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            if( $( '#btn-check-outlined-mayMen' ).is(':checked') ){
                [...data].sort((b,a) => a.price - b.price).slice((n * max), (n * max + max)).forEach(e => {
                    appendProductsList(e);
                });
            } else {
                [...data].sort((a,b) => a.price - b.price).slice((n * max), (n * max + max)).forEach(e => {
                    appendProductsList(e);
                });
            }
            
        })
   
    
    
    
}

export function fetchAmountOfProducts(){
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            appendProductsNav(Math.ceil([...data].length)/max);
            });
}
