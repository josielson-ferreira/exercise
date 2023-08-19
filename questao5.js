//Escreva um programa JavaScript para criar outra string a partir de uma determinada string com o primeiro caractere da string fornecida adicionado à frente e atrás.
function front_back(str)
{
    first = str.substring(0,1);
    return first + str + first;
}
console.log(front_back('a'));
console.log(front_back('ab'));
