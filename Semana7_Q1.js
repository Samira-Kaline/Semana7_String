

function criarLista(quant,text){
    var lista = document.getElementById('MinhaLista');
    lista.innerHTML = '';
    quant = parseInt(quant,10)
    for(var i=0;i<quant;i++){
        if(text==''){
            var text = 'Text';
        }
        var item = document.createElement("LI");
        var textoItem = document.createTextNode(text+' '+(i+1));
        item.appendChild(textoItem);
        document.getElementById("MinhaLista").appendChild(item);
    }
}