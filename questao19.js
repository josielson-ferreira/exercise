//criar uma função que retornará um booleano especificando se um número é primo
function primo(n) {
    if(n <= 1) {

    }

    if (n <= 3) {
        return true;
    }

    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

console.log(primo(17));
console.log(primo(25));