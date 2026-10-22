function gerarRecomendacao(resultados) {
    const frequenciaHabilidades = resultados.reduce(
        (acumulador, resultado) => {
            resultado.habilidadesFaltantes.forEach(habilidade => {
                acumulador[habilidade] =
                    (acumulador[habilidade] || 0) + 1;
            });

            return acumulador;
        },
        {}
    );

    const prioridades = Object.entries(frequenciaHabilidades)
        .sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            }

            return a[0].localeCompare(b[0]);
        });

    if (prioridades.length === 0) {
        return [
            "Parabéns! O candidato possui todas as habilidades exigidas pelas vagas analisadas."
        ];
    }

    return prioridades.slice(0, 3).map(([habilidade, frequencia]) => {
        return `${habilidade}: aparece em falta em ${frequencia} vaga(s).`;
    });
}

module.exports = gerarRecomendacao;