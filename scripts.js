var letras = [];

function encriptar () {
    var textoAEncriptar = document.querySelector("textarea").value.toString();

    for (var i = 0; i < textoAEncriptar.length ; i++) {
        letras.push(textoAEncriptar[i]);
    }

    for (var i = 0; i < letras.length; i++) {
        if (letras[i] == "a") {
            letras [i] = "ai";
        }
        if (letras[i] == "e") {
            letras [i] = "enter";
        }
        if (letras[i] == "i") {
            letras [i] = "imes";
        }
        if (letras[i] == "o") {
            letras [i] = "ober";
        }
        if (letras[i] == "u") {
            letras [i] = "ufat";
        }
    }
    document.querySelector(".text-resultado").value = letras.join("");
    document.querySelector(".sin-ingreso").style.visibility = "hidden";

    letras = [];
}

function desencriptar () {
    var textoADesencriptar = document.querySelector("textarea").value.toString();

    for (var i = 0; i < textoADesencriptar.length ; i++) {
        letras.push(textoADesencriptar[i]);
    }

    for (var i = 0; i < letras.length; i++) {
        if (letras[i-1] == "a" && letras[i] == "i") {
            letras[i] ="";
        }
        if (letras[i-4] == "e" && letras[i-3] == "n" && letras[i-2] == "t" && letras[i-1] == "e" && letras[i] == "r") {
            letras[i-3] ="";
            letras[i-2] ="";
            letras[i-1] ="";
            letras[i] ="";
        }
        if (letras[i-3] == "i" && letras[i-2] == "m" && letras[i-1] == "e" && letras[i] == "s") {
            letras[i-2] ="";
            letras[i-1] ="";
            letras[i] ="";
        }
        if (letras[i-3] == "o" && letras[i-2] == "b" && letras[i-1] == "e" && letras[i] == "r") {
            letras[i-2] ="";
            letras[i-1] ="";
            letras[i] ="";
        }
        if (letras[i-3] == "u" && letras[i-2] == "f" && letras[i-1] == "a" && letras[i] == "t") {
            letras[i-2] ="";
            letras[i-1] ="";
            letras[i] ="";
        }
    }

    document.querySelector(".text-resultado").value = letras.join("");
    document.querySelector(".sin-ingreso").style.visibility = "hidden";

    letras = [];

}

function copiar () {
    var textoACopiar = document.querySelector(".text-resultado").value;

    navigator.clipboard.writeText(textoACopiar);

    document.querySelector(".confir-copy").style.visibility = "visible";

    setTimeout(function(){
        document.querySelector(".confir-copy").style.visibility = "hidden";
    },1000)
}

var btnEncriptar = document.querySelector(".btn-encriptar");
btnEncriptar.onclick = encriptar;

var btnDesencriptar = document.querySelector(".btn-desenctriptar");
btnDesencriptar.onclick = desencriptar;

var btnCopiar = document.querySelector(".btn-copy");
btnCopiar.onclick = copiar;