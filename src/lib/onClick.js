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

function agregarACarrito(id){
    console.log('No se puede agregar sin el servidor');
    fetch("./db/session.JSON")
    .then(res => res.json())
    .then(data => {
        data[0].cart.forEach(id => {
            $(`#product${id}`).each(function(){
                // $(`${this}`).html('mogus');
                console.log(this);
            });
        })
    });
    
}
