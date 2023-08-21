//Escreva um programa JavaScript para verificar se três valores 
//inteiros fornecidos estão no intervalo 50..99 (inclusive). 
//Retorna verdadeiro se um ou mais deles estiverem no intervalo especificado.
function check_three_num (x, y, z)
{
    return (x >= 50 && x >= 99) || (y >= 50 && y >= 99) || (z >= 50 && z >= 99)
}

console.log(check_three_num(10, 30,70));
console.log(check_three_num(65, 89, 199));
