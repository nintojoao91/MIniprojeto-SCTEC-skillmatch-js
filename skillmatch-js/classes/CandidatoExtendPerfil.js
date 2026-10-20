const Perfil = require("./Perfil");

class Candidato extends Perfil {
    constructor(nome, areaInteresse, habilidades, experiencia) {
        super(nome, areaInteresse, habilidades, experiencia);
    }

    possuiHabilidade(habilidade) {
        return this.habilidades.some(
            item => item.toLowerCase() === habilidade.toLowerCase()
        );
    }
}

module.exports = Candidato;