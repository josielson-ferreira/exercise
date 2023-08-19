//Escreva um programa JavaScript para verificar um par de
// números e retornar true se um dos números for 50 ou se a soma for 50.
function test50(x,y)
{
    return ((x==50 || y==50) || (x+y==50));
}
console.log(test50(20,20));