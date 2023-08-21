//encontre o número máximo em uma matriz de números
function finMax (matriz) {
    if(matriz.length === 0) {
        return undefined;
    }

    let max = matriz[0][0];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > max) {
                max = matriz[i][j];
            }
        }
    }
    return max;
}

const matriz = [
    [-5, 10, -3],
    [12, -9, 5],
    [90, 0, 1]
];

const max = finMax(matriz);
console.log("O número máximo na matriz é: ", max);