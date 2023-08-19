//Escreva um programa JavaScript para verificar se 
//um determinado inteiro está dentro de 20 de 100 ou 400.
function test(x)
{
    return(Math.abs(100 - x) <= 20 || (Math.abs(400 - x) <= 20));
}
console.log(test(10));