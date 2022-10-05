export function noCollapse(){
    if($("#button-collapse").is(":hidden")){
        $('#collapseExample').removeClass('collapse');
    }else{
        $('#collapseExample').addClass('collapse');
    }
}

export function setCopyrightYear(){
    let text = $('#copyright').html();
    let date = new Date();
    let year = date.getFullYear();
    $('#copyright').html(text.replace('YEAR', year));
}
/*
Cambiar hoover del nav

Cambiar color botones azules
Boton de ordenamiento funciona
Agregar copyright al footer

El nav en mobile que sea menos vertical
Agregar modal al agregar productos

*/
