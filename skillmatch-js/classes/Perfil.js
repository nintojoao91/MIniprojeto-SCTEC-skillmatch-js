class Perfil {
    constructor(nome, areaInteresse, habilidades, experiencia) {
        this.nome = nome;
        this.areaInteresse = areaInteresse;
        this.habilidades = habilidades;
        this.experiencia = experiencia;
    }

    apresentarPerfil() {
        return `Nome: ${this.nome}
Área de interesse: ${this.areaInteresse}
Habilidades: ${this.habilidades.join(", ")}
Experiência: ${this.experiencia}`;
    }
}

module.exports = Perfil;