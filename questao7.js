//Escreva um programa JavaScript para calcular a soma dos dois inteiros fornecidos. 
//Se os dois valores forem iguais, retorne o triplo da soma.
function sumTriple(x,y)
{
    if(x==y){
        return 3 * (x+y);
    }
    else
    {
        return (x+y);
    }
}
console.log(sumTriple(10,10));
