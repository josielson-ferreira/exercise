//Escreva um programa JavaScript para converter temperaturas de  celsius para fahrenheit.
function cToF(celsius)
{
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp+ ' \xB0C is ' + cToFahr + ' \xB0F.';
       console.log(message);
}
cToF(60);
