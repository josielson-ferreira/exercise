//Escreva um programa JavaScript para calcular o fatorial de um número.
function factorial(n) {
    if(n <= 1) return 1;
    return n * factorial(n - 1);

}
console.log(factorial(7));
