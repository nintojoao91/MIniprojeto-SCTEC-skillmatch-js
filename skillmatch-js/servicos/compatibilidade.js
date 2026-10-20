function classificarCompatibilidade(percentual) {
    if (percentual >= 80) {
        return "Alta compatibilidade";
    } else if (percentual >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}

function analisarVaga(candidato, vaga) {
    const habilidadesPossuidas = candidato.habilidades.map(
        habilidade => habilidade.toLowerCase()
    );

    const requisitosAtendidos = vaga.requisitos.filter(
        requisito => habilidadesPossuidas.includes(
            requisito.toLowerCase()
        )
    );

    const habilidadesFaltantes = vaga.requisitos.filter(
        requisito => !habilidadesPossuidas.includes(
            requisito.toLowerCase()
        )
    );

    const percentual = vaga.requisitos.length === 0
        ? 0
        : Math.round(
            (requisitosAtendidos.length / vaga.requisitos.length) * 100
        );

    return {
        empresa: vaga.empresa,
        cargo: vaga.cargo,
        percentual,
        classificacao: classificarCompatibilidade(percentual),
        requisitosAtendidos,
        habilidadesFaltantes
    };
}

// Callback: recebe uma função como argumento.
function analisarTodasAsVagas(candidato, vagas, callback) {
    return vagas.map(vaga => callback(candidato, vaga));
}

module.exports = {
    analisarVaga,
    analisarTodasAsVagas
};