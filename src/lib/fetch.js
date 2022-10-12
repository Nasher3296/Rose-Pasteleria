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
    let text = $('#buscarHidden').val();
    $(".products-list").html("");
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            if( $( '#btn-check-outlined-mayMen' ).is(':checked') ){
                [...data].filter(e => e.name.toLowerCase().includes(text.toLowerCase()) || text == "").sort((b,a) => a.price - b.price).slice((n * max), (n * max + max)).forEach(e => {
                    appendProductsList(e);
                });
            } else {
                [...data].filter(e => e.name.toLowerCase().includes(text.toLowerCase()) || text == "").sort((a,b) => a.price - b.price).slice((n * max), (n * max + max)).forEach(e => {
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

export function fetchAmountOfProductsText(){
    let text = $('#buscarHidden').val();
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            appendProductsNav(
                Math.ceil(
                    [...data].filter(
                        e => e.name.toLowerCase().includes(
                            text.toLowerCase()
                        )
                    ).length/max
                )
            );
        });
}