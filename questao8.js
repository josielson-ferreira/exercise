//Escreva um programa JavaScript para calcular a diferença absoluta entre
// um número especificado e 19. Retorna o triplo da diferença absoluta se o número especificado for maior que 19.
function numTriple(n)
{
    if(n<=19){
        return (19 - n);
    }
    else
    {
        return 3 * (n-19);
    }
}
console.log(numTriple(12));