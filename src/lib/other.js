export function searchOrder(code){
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