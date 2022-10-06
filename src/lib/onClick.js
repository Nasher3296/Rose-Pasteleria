function sumarUno(id){
    let val = $(`#cantidad${id}`).val();
    $(`#cantidad${id}`).val(++val)
}

function restarUno(id){
    let val = $(`#cantidad${id}`).val();
    $(`#cantidad${id}`).val(--val)
}
