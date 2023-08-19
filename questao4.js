//Escreva um programa JavaScript para verificar se um determinado número positivo é um múltiplo de 3 ou 7.
function test37(x)
{
    if(x % 3 == 0 || x % 7 == 0)
    {
        return true;
    }
    else {
        return false;
    }
       
}
console.log(test37(12));
console.log(test37(15));
