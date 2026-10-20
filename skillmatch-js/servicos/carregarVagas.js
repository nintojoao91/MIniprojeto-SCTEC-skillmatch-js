const vagas = require("../dados/vagas");

function carregarVagas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vagas);
        }, 1000);
    });
}

module.exports = carregarVagas;