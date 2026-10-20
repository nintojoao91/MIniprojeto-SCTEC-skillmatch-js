function criarHistorico() {
    let totalAnalises = 0;

    return function registarAnalise() {
        totalAnalises++;
        return totalAnalises;
    };
}

module.exports = criarHistorico;