import {appendOutstandingProduct, appendProductsList} from './lib/append.js';
import {fetchProducts, fetchAllProducts} from './lib/fetch.js';

$(document).ready(function () {
    fetchProducts(3);
    fetchAllProducts()
});

