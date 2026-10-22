# MIniprojeto-SCTEC-skillmatch-js
Mini-projeto de primeira parte do curso front-end SCTEC
Simulador de Compatibilidade com Vaga Front-End Júnior

1 Descrição do projecto

O SkillMatch JS é uma aplicação desenvolvida em JavaScript puro, executada através do Node.js. O seu objectivo é comparar as habilidades de um candidato com os requisitos de vagas fictícias de Front-End Júnior.

2 Objectivos

Representar o perfil técnico do candidato.

Criar e analisar pelo menos três vagas.

Calcular o percentual de compatibilidade.

Classificar as vagas em alta, média ou baixa compatibilidade.

Identificar as habilidades em falta.

Seleccionar a vaga com maior compatibilidade.

Gerar recomendações de estudo.

3 Regra de cálculo

A compatibilidade é calculada dividindo o número de requisitos atendidos pelo número total de requisitos da vaga e multiplicando o resultado por 100.

Compatibilidade = (Requisitos atendidos / Total de requisitos) × 100.

Todos os requisitos têm o mesmo peso. O resultado é arredondado para um número inteiro.

4 Classificação

De 80% a 100%: alta compatibilidade.

De 50% a 79%: média compatibilidade.

De 0% a 49%: baixa compatibilidade.

5 Critério das recomendações

As habilidades em falta são contadas em todas as vagas. As que aparecem como requisito em mais vagas recebem prioridade de estudo. Em caso de empate, a ordenação é alfabética. São apresentadas até três recomendações.

6 Organização modular

O projecto está dividido em módulos com responsabilidades específicas: classes, dados do candidato, dados das vagas, cálculo de compatibilidade, recomendações, carregamento assíncrono e histórico de análises. O ficheiro skillmatch.js coordena a execução.

7 Conteúdos de JavaScript utilizados

Variáveis e tipos de dados.

Condicionais e operadores.

Funções e arrow functions.

Arrays e métodos map, filter, find e reduce.

Objectos, classes, construtores, herança e this.

Callbacks e closures.

Promise, async/await e tratamento de erros.

Módulos CommonJS com require() e module.exports.

8 Execução

É necessário ter o Node.js instalado. Na pasta principal do projecto, executar:

node skillmatch.js

Não são necessárias bibliotecas externas.

9 Limitações

As vagas são fictícias e os dados são carregados localmente, com um atraso simulado. A compatibilidade mede apenas a correspondência entre as habilidades declaradas e os requisitos listados; não substitui a avaliação humana de um processo de recrutamento.