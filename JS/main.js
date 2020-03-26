const alfabeto = "abcdefghijklmnñopqrstuvwxyz";
const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const tamano = alfabeto.length - 1;

var boton = document.getElementById("cifrar");
boton.addEventListener("click", () => {
    salida.innerHTML = cifrar(entrada.value);
    entrada.value = '';
});

function cifrar(entrada) {
    let texto = entrada.toLowerCase();
    let salidaTexto = '';

    for(let i = 0; i < texto.length; i++) {
        salidaTexto += (texto[i] != ' ') ? alfabeto[tamano - alfabeto.indexOf(texto[i])] : ' ';
    }
    return salidaTexto;
}