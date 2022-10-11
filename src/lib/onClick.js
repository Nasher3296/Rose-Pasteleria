function sumarUno(id){
    let val = $(`#cantidad${id}`).val();
    $(`#cantidad${id}`).val(++val)
    doOnChange(id);
}

function restarUno(id){
    let val = $(`#cantidad${id}`).val();
    if(--val > 0){
        $(`#cantidad${id}`).val(val)
        doOnChange(id)
    }
}


$('input[type=number]').blur(function(event) {    
    event.target.checkValidity();
}).bind('invalid', function(event) {
    event.target.value = 1;
    let id = event.target.id.match(/cantidad(.+)/)[1];
    doOnChange(id);
});

function doOnChange(id){
    let element = document.getElementById(`cantidad${id}`);
    let event = new Event('change');
    element.dispatchEvent(event);
}

function updateSubt(id){
    let subtotal = $(`#subtotal${id}`);
    let cantidad = $(`#cantidad${id}`).val();
    let precio = $(`#precio${id}`).val();
    subtotal.html(cantidad * precio);
}

function agregarACarrito(prod){
    let text = prod.children[0].innerHTML;
    let [id, nombre, categoria, precio, unidad] = text.split('/');
    if(!($(`#carritoModalContainer #${id}id`)[0])){
        $('#carritoModalContainer').append(`
            <div class="row" id="${id}id">
                <div class="col-1"><button class="btn btn-close" onclick="removeFromCart(this)"></button></div>
                <div class="col-5">${nombre}</div>
                <div class="col-3 d-flex">
                <button class="col-3" onclick="restarUno(${id})">-</button>
                <input type="hidden" id="precio${id}" name="price" value="${precio}">
                <input id="cantidad${id}" class="col-4 text-center" type="number" name="cantidad" id="" value="1" min="1" onchange="updateSubt(${id})" required>
                <button class="col-3" onclick="sumarUno(${id})">+</button>
                </div>
                <div class="col-3 subtotalCarrito" id="subtotal${id}">${precio}</div>
            </div>
        `);
    }   
}

function removeFromCart(element){
    element.parentNode.parentNode.remove();
}
