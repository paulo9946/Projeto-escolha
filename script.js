function mudarImagem(imagem){
    let body = document.body;

    switch(imagem){
        case 'montanha': body.style.backgroundImage = "url('montanha.jpg')"; break;
        case 'floresta': body.style.backgroundImage = "url('florestaa.jpg')"; break;
        case 'mar': body.style.backgroundImage = "url('mar.jpg')"; break;
        case 'por do sol': body.style.backgroundImage = "url('pordosol.jpg')"; break;
        case 'lua': body.style.backgroundImage = "url('lua.jpg')"; break;
        default: body.style.backgroundColor = 'black';
    }
}