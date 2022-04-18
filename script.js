let num = 10;

do {
    num = parseInt(prompt("Bienvenido al desafio complementario. Ingrese un numero del 0 al 10"));

    if(num <= 10){
        alert ("El numero ingresado es =" + " " + num)
    }
    else
        alert("Ingrese un numero del 1 al 10 por favor!")
}
while (num > 10);