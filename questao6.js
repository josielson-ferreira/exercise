//Escreva um programa JavaScript para obter a diferença entre um 
//determinado número e 13, se o número for maior que 13, retorne o dobro da diferença absoluta.
function diferente(n)
{
    if(n<=13)
      return 13 - n;
    else
      return (n-13) * 2;
}
console.log(diferente(32))
