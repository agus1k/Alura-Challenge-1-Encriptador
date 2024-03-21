const area_texto = document.querySelector("#area-texto")
const area_mensaje = document.querySelector("#area-mensaje")
const areaTexto = document.querySelector("#area-texto");


const matriz_code = [
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

const desenc_code = [
    ["enter", "e"],
    ["imes","i"],
    ["ai","a"],
    ["ober","o"],
    ["ufat","u"],
];

function botonEncriptar(){
    const texto = encriptar(area_texto.value)
    console.log(texto);
    area_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])) {
        fraseEncriptada = fraseEncriptada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
        );
       }
    }
    return fraseEncriptada;
}

function botonDesencriptar(){
    const texto = desencriptar(area_mensaje.value)
    console.log(texto);
    area_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada){
    for(let i = 0; i < desenc_code.length; i++){
        if(fraseDesencriptada.includes(desenc_code[i][0])) {
        fraseDesencriptada = fraseDesencriptada.replaceAll(
        desenc_code[i][0],
        desenc_code[i][1]
        );
       }
    }
    return fraseDesencriptada;
}

function copiarTexto() {
    var textarea = document.getElementById("area-mensaje");
    
    
    textarea.select();

    try {
        
        navigator.clipboard.writeText(textarea.value)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                alert("Error al copiar el texto");
                console.error('Error al copiar el texto: ', err);
            });
    } catch (err) {
        alert("Error al copiar el texto");
        console.error('Error al copiar el texto: ', err);
    }
}

areaTexto.addEventListener("keydown", (event) => {
    let letra = event.key;
    if (event.key == " " || event.key.length > 1 || (event.key.length == 1 && /^[a-z]{1}$/.test(letra))) {
    } else {
      alert("Solo minúsculas y sin acentos");
      event.preventDefault();
    }
  });