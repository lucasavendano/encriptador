let textoAEncriptar;
let textoEncriptado;
let nuevoADesencriptar;
let desencriptado;
let chequeoCaracteres = /^[a-z\s]+$/;
let textoCopiado;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento(`#resultado`,`Ningún mensaje fue encontrado`);
    document.querySelector(`#copiar`).style.visibility ="hidden";
}

condicionesIniciales();

function encriptarTexto() {
    textoAEncriptar = (document.getElementById(`textoParaEncriptar`).value);
    if ((textoAEncriptar.includes("enter")) || (textoAEncriptar.includes("imes")) || (textoAEncriptar.includes("ai")) || (textoAEncriptar.includes("ober")) || (textoAEncriptar.includes("ufat")))  {
        asignarTextoElemento(`#indicacion`,`El texto ya esta encriptado`);
    } else if (textoAEncriptar == "") {
        asignarTextoElemento(`#resultado`,`Ningún mensaje fue encontrado`);
        document.querySelector(`#copiar`).style.visibility ="hidden";
        asignarTextoElemento(`#indicacion`,`Ingresa el texto que deseas encriptar y desencriptar`);
    } else if (!chequeoCaracteres.test(textoAEncriptar)) {
        asignarTextoElemento(`#resultado`,`Has ingresado caracteres inválidos`);
        document.querySelector(`#copiar`).style.visibility ="hidden";
    } else {
        textoEncriptado = textoAEncriptar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        asignarTextoElemento(`#resultado`,textoEncriptado);
        asignarTextoElemento(`#indicacion`,`¡Genial!, ahora puedes copiar el texto encriptado`);
        document.querySelector(`#copiar`).style.visibility ="visible";
    }
}

function desencriptarTexto() {
    nuevoADesencriptar = (document.getElementById(`textoParaEncriptar`).value);
    console.log(nuevoADesencriptar);
    if ((!nuevoADesencriptar.includes("enter")) && (!nuevoADesencriptar.includes("imes")) && (!nuevoADesencriptar.includes("ai")) && (!nuevoADesencriptar.includes("ober")) && (!nuevoADesencriptar.includes("ufat"))) {
        asignarTextoElemento(`#indicacion`,`El texto no esta encriptado`);
    } else {
        desencriptado = nuevoADesencriptar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        asignarTextoElemento(`#resultado`,desencriptado);
        asignarTextoElemento(`#indicacion`,`¡Genial!, haz desencriptado el texto`);
        document.querySelector(`#copiar`).style.visibility ="hidden";
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(textoEncriptado);
}
