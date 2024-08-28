const textAreaIngreso = document.querySelector(".ingresar");
const textAreaSalida = document.querySelector(".mensaje_box");

function botonEncriptar(){
    const textoEncriptado = encriptacion(textAreaIngreso.value);
    textAreaSalida.value = textoEncriptado;
    textAreaIngreso.value = "";
    textAreaSalida.style.backgroundImage = "none";

}


function encriptacion(stringNoEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringNoEncriptado = stringNoEncriptado.toLowerCase();

    for(let i =0; i< matrizCodigo.length; i++){
        if(stringNoEncriptado.includes(matrizCodigo[i][0])){
            stringNoEncriptado = stringNoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringNoEncriptado
}

function butonDesencriptar(){
    const textoDesencriptado = desencriptacion(textAreaIngreso.value);
    textAreaSalida.value = textoDesencriptado;
    textAreaIngreso = "";
    textAreaSalida.style.backgroundImage = "none";
}


function desencriptacion(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringEncriptado
}