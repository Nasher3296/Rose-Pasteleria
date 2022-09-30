
export function appendOutstandingProduct(p) {
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

export function appendProductsList(p) {
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

export function appendProductsNav(n){
    $('#paginationUl').append(`<li class="page-item active" id="paginationLi${1}"><a class="page-link">${1}</a></li>`);
    for(let i = 1 ; i < n ; i++){
        $('#paginationUl').append(`<li class="page-item" id="paginationLi${i+1}"><a class="page-link">${i+1}</a></li>`);
    }
    $('#paginationUl').append(`<li class="page-item"><a class="page-link">&gt</a></li>`);
}