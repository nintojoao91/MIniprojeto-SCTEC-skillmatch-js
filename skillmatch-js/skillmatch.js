const perfil= require("./classes/Perfil");
const candidatoExtendPerfil= require("./classes/CandidatoExtendPerfil");
const candidato = require("./classes/dadosCandidato");
const carregarVagas = require("./servicos/carregarVagas");




const {
    analisarVaga,
    analisarTodasAsVagas
} = require("./servicos/compatibilidade");

const gerarRecomendacao = require("./servicos/recomendacao");
const criarHistorico = require("./servicos/historico");

const registarAnalise = criarHistorico();

async function executarSkillMatch() {
    try {
        console.log("====================================");
        console.log("       SKILLMATCH JS");
        console.log("  Compatibilidade Front-End Júnior");
        console.log("====================================");

        console.log("\nPERFIL DO CANDIDATO");
        console.log(candidato.apresentarPerfil());

        console.log("A carregar vagas do servidor...\n");

        // async/await aguarda a resolução da Promise.
        const vagas = await carregarVagas();

        console.log(`${vagas.length} vagas carregadas com sucesso!\n`);

        // Callback: analisarVaga é passada como argumento.
        const resultados = analisarTodasAsVagas(
            candidato,
            vagas,
            analisarVaga
        );

        console.log("RESULTADO DA ANÁLISE");

        resultados.forEach(resultado => {
            console.log("\n------------------------------------");
            console.log(`Empresa: ${resultado.empresa}`);
            console.log(`Cargo: ${resultado.cargo}`);
            console.log(`Compatibilidade: ${resultado.percentual}%`);
            console.log(`Classificação: ${resultado.classificacao}`);

            console.log(
                "Habilidades atendidas:",
                resultado.requisitosAtendidos.length > 0
                    ? resultado.requisitosAtendidos.join(", ")
                    : "Nenhuma"
            );

            console.log(
                "Habilidades em falta:",
                resultado.habilidadesFaltantes.length > 0
                    ? resultado.habilidadesFaltantes.join(", ")
                    : "Nenhuma"
            );

            registarAnalise();
        });

        // Identifica a vaga com maior percentual.
        const melhorVaga = resultados.reduce((melhor, atual) => {
            return atual.percentual > melhor.percentual
                ? atual
                : melhor;
        });

        console.log("\n====================================");
        console.log("VAGA COM MAIOR COMPATIBILIDADE");
        console.log(`${melhorVaga.empresa} - ${melhorVaga.cargo}`);
        console.log(`Compatibilidade: ${melhorVaga.percentual}%`);
        console.log("====================================");

        console.log("\nRECOMENDAÇÕES DE ESTUDO");

        const recomendacoes = gerarRecomendacao(resultados);

        recomendacoes.forEach((recomendacao, indice) => {
            console.log(`${indice + 1}. ${recomendacao}`);
        });

        console.log(
            `\nTotal de análises realizadas: ${registarAnalise() - 1}`
        );

    } catch (erro) {
        console.error("Erro ao executar o SkillMatch:", erro.message);
    }
}

executarSkillMatch();