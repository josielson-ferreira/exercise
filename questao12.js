//Escreva um programa JavaScript para verificar se uma string começa com 'Java', caso contrário.
function start_spec_str(str)
{
    if (str.length < 4)
    {
        return false;
    }
    front = str.substring(0,4);
    if (front === 'Java')
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(start_spec_str("JavaScript"));
