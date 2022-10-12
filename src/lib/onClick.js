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



function blurCant(id){
    let element = document.getElementById(`cantidad${id}`);
    if(element.value < 1)
        element.value = 1;
    doOnChange(id)
}

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
                <input id="cantidad${id}" class="col-4 text-center inputNumber" type="number" name="cantidad" id="" value="1" min="1" onblur="blurCant(${id})" onchange="updateSubt(${id})" required>
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
