function Campo() {

    var id = false,
        nome = false,
        descricao = false,
        formato = false,
        obrigatorio = false;
    
    this.getId = getId;
    this.setId = setId;
    this.getNome = getNome;
    this.setNome = setNome;
    this.getDescricao = getDescricao;
    this.setDescricao = setDescricao;
    this.getFormato = getFormato;
    this.setFormato = setFormato;
    this.getObrigatorio = getObrigatorio;
    this.setObrigatorio = setObrigatorio;
    this.reset = reset;

    return this;

    function getId() {
        return id;
    }
    function setId(value) {
        id = value;
    }

    function getNome() {
        return nome;
    }
    function setNome(value) {
        nome = value;
    }

    function getDescricao() {
        return descricao;
    }
    function setDescricao(value) {
        descricao = value;
    }

    function getFormato() {
        return formato;
    }
    function setFormato(value) {
        formato = value;
    }

    function getObrigatorio() {
        return obrigatorio;
    }
    function setObrigatorio(value) {
        obrigatorio = value;
    }

    function reset() {
        this.setId = false;
        this.setNome = false;
        this.setDescricao = false;
        this.setFormato = false;
        this.setObrigatorio = false;
    }

}