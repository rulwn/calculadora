function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let suma = num1 + num2;
    let resultadoElement = document.getElementById("texto1");
    resultadoElement.innerHTML = "La suma es: " + suma;
    resultadoElement.classList.add("mostrar");

    if(suma > 10){
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("calcularBtn").addEventListener("click", sumar);

function restar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let resta = num1 - num2;
    let resultadoElement = document.getElementById("texto1");
    resultadoElement.innerHTML = "La resta es: " + resta;
    resultadoElement.classList.add("mostrar");

    if(resta > 10){
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("Restabtn").addEventListener("click", restar);

function multi(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let multip = num1 * num2;
    let resultadoElement = document.getElementById("texto1");
    resultadoElement.innerHTML = "La multiplicacion es: " + multip;
    resultadoElement.classList.add("mostrar");

    if(multip > 10){
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("Multiplicarbtn").addEventListener("click", multi);

function divi(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let divo = num1 / num2;
    let resultadoElement = document.getElementById("texto1");
    resultadoElement.innerHTML = "La division es: " + divo;
    resultadoElement.classList.add("mostrar");

    if(divo > 10){
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("Dividirbtn").addEventListener("click", divi);

function Limpiar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    let resultadoElement = document.getElementById("texto1");
    resultadoElement.style.visibility = "hidden";
}

document.getElementById("clearBtn").addEventListener("click",Limpiar)