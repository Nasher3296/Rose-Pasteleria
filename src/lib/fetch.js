import {appendOutstandingProduct, appendProductsList} from './append.js';

export function fetchProducts(n) {
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            [...data].sort(() => 0.5 - Math.random()).slice(0, n).forEach(e => {
                appendOutstandingProduct(e);
            });
        })
}

export function fetchAllProducts() {
    let max = 30;
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            [...data].slice(0, max).forEach(e => {
                appendProductsList(e);
            });
        })
}