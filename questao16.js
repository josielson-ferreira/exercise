//Escreva um programa JavaScript para encontrar o maior de três inteiros dados.
function max_of_three(x, y, z)
{
    max_val = 0;
    if (x > y)
{
    max_val = x;
} else
{
    max_val = y;
}
if (z > max_val)
{
    max_val = z;
}
    return max_val;
}

console.log(max_of_three(2, 9, 0));