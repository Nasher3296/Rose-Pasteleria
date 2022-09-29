$(document).ready(function () {
    fetchProducts(3);
    fetchAllProducts()
});


function fetchProducts(n) {
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            [...data].sort(() => 0.5 - Math.random()).slice(0, n).forEach(e => {
                appendOutstandingProduct(e);
            });
        })
}

function fetchAllProducts() {
    let max = 30;
    fetch("./db/products.JSON")
        .then(res => res.json())
        .then(data => {
            [...data].slice(0, max).forEach(e => {
                appendProductsList(e);
            });
        })
}

function appendOutstandingProduct(p) {
    $("#outstandingProductsContainer").append(`
        <div class="col">
            <div class="card card-product overflow-hidden">
                <div class="card-body">
                    <div class="outstanding-card"><span class="outstanding-text">Destacado</span></div>
                    <a href="#!"> <img src="./media/products/example.jpg" alt="Grocery Ecommerce Template" class="mb-3 img-fluid img-center w-100"></a>
                    <div class="text-small mb-1"><a href="#!" class="text-decoration-none text-muted"><small>${p.category}</small></a></div>
                    <h2 class="fs-6"><a href="" class="text-dark text-center text-decoration-none fs-3">${p.name}</a></h2>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div><span class="text-dark">$${p.price}</span> <span class="text-muted">c/${p.unit}</span>
                        </div>
                        <div><a href="#!" class="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg> Agregar</a></div>
                    </div>
                </div>
            </div>
        </div> 
    `)
}

function searchOrder(code){
    fetch("./db/orders.JSON")
        .then(res => res.json())
        .then(data => {
            let res = data.find(e => e.code == code);
            if(res){
                $("#myOrderListMainContainer").html(`
                    <h3>Resumen de pedido: </h3>
                    <div class="my-order-list" id="myOrderList">
                        <div class="row fw-bold fs-5">
                            <div class="col-md-10 col-8 main-col-mol">Product</div>
                            <div class="col">Cantidad</div>
                            <div class="col">Subtotal</div>
                        </div>
                    </div>
                    <button class="btn btn-danger d-flex mt-2 m-auto">Cancelar Pedido</button>
                `);
                res.products.forEach(e => {
                    fetch("./db/products.JSON")
                        .then(res => res.json())
                        .then(products => {
                            let prod = products.find(x => e['product-id'] == x.id);
                            if(prod){
                                $("#myOrderList").append(`
                                <div class="row">
                                    <div class="col-md-10 col-8  main-col-mol d-flex">
                                    <img src="./media/products/${prod.img}.jpg" width="100px" alt="">
                                    <div class="p-3">
                                        <h4>${prod.name}</h4>
                                        <span>${prod.price}</span>
                                        <span>c/${prod.unit}</span>
                                    </div>
                                    </div>
                                    <div class="col text-center my-auto">${e.amount}</div>
                                    <div class="col text-center my-auto">${e.amount * prod.price}</div>
                                </div>
                                `);
                            }
                        });
                    
                });
            }else{
                $("#myOrderListMainContainer").html(`
                    <h3 class="text-danger">No se ha encontrado dicho pedido</h3>
                `);
            }
        })
}


function appendProductsList(p) {
    $(".products-list").append(`
        <div class="col">
            <div class="card card-product overflow-hidden">
                <div class="card-body">
                    <a href="#!"> <img src="./media/products/example.jpg" alt="Grocery Ecommerce Template" class="mb-3 img-fluid img-center w-100"></a>
                    <div class="text-small mb-1"><a href="#!" class="text-decoration-none text-muted"><small>${p.category}</small></a></div>
                    <h2 class="fs-6"><a href="" class="text-dark text-center text-decoration-none fs-3">${p.name}</a></h2>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div><span class="text-dark">$${p.price}</span> <span class="text-muted">c/${p.unit}</span>
                        </div>
                        <div>
                            <a href="#!" class="btn btn-primary btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg> Agregar</a></div>
                        </div>
                    </div>
                </div>
            </div> 
        `)
}