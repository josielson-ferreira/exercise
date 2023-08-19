//Escreva um programa JavaScript para verificar dois números inteiros fornecidos se um é positivo e outro é negativo.
function positivo_negativo(x,y)
{
    if ((x < 0 && y > 0 ) || x > 0 && y < 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(positivo_negativo(4,-3))
