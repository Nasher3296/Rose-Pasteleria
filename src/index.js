$(document).ready(function () {
    showOustandingProducts(3);
});

function showOustandingProducts(n) {
    let arr = fetchProducts(n);
    console.log(arr);
    arr.forEach(e => {console.log("aa")});

    $("#outstandingProductsContainer").html()
}
function fetchProducts(n) {
    let response = [];
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            [...data].sort(() => 0.5 - Math.random()).slice(0, n).forEach(e => {
                response.push(e);
            });
        })
    return response;
}