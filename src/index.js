
// //Extrae datos de textarea en la pantalla cifrado y descifrado
let pass1 = document.getElementById("info1");
let pass2 = document.getElementById("info2");
let cifrar = document.getElementById("cifrar")
let descifrar = document.getElementById("descifrar");
let pass3 = document.getElementById("area1");
let pass4 = document.getElementById("area2");


//Función para cifrar
let aum_arr, ascii;
if (cifrar) {
    cifrar.addEventListener("click", () => {

        let offset = document.getElementById("desplazamiento").value;

        let arr = [];

        for (let i = 0; i < pass1.value.length; i++) {

            ascii = pass1.value.charCodeAt(i);

            aum_arr = (ascii - 65 + parseInt(offset)) % 26 + 65;

            arr.push(String.fromCharCode(aum_arr));
        }

        pass2.textContent = `Tu clave cifrada es : ${arr.join("")} y recuerda que tu desplazamiento para descifrar es : ${offset}`
    })
}




//Función para descifrar
if (descifrar) {
    descifrar.addEventListener("click", () => {

        offset = document.getElementById("desplazamiento").value;

        let arr = [], num2;

        for (let i = 0; i < pass3.value.length; i++) {

            ascii = pass3.value.charCodeAt(i);

            let num = (ascii - 65 - parseInt(offset))

            if (num < 0) {
                num2 = num + 26;
                aum_arr2 = num2 % 26 + 65;
                
            } else {
                
                aum_arr2 = num % 26 + 65;
            }

            arr.push(String.fromCharCode(aum_arr2));
        }

        pass4.value = arr.join("")
    })
}


//variables declaradas para los botones
let textareaC1 = document.getElementById("info1");
let textareaC2 = document.getElementById("info2");
let des = document.getElementById("desplazamiento");
let textareaD1 = document.getElementById("area1");
let textareaD2 = document.getElementById("area2");


//Botón limpiar pantalla cifrado
let limpiar = document.getElementById("limpiar")
if (limpiar) {
    limpiar.addEventListener("click", () => {

        textareaC1.value = "";
        textareaC2.value = "";
        des.value = "";

    })
}
//Botón limpiar pantalla descifrado
let limpiar2 = document.getElementById("limpiar2");

if (limpiar2) {
    limpiar2.addEventListener("click", () => {

        textareaD1.value = "";
        textareaD2.value = "";
        des.value = "";
    })
}
