var ajax = Ajax(),
    campo = Campo(),
    canReset = true,
    loading = document.getElementById('loading-img'),
    regra = document.getElementById('regra'),
    descricao = document.getElementById('descricao'),
    hideables = document.getElementsByClassName('hideable');

document.getElementById("nome").addEventListener("keydown", function(e) {
    if (e.which == 13) {
        handleSearch();
        return;
    }
    if (canReset) handleReset();
});

function handleReset() {
    console.log('handleReset()');
    descricao.value = '';
    regra.innerHTML = '';
    regra.value = '';
    hideHideables();
    eraseEraseables();
    hideLoading();
    canReset = false;
}

function handleSearch() {
    showLoading();
    console.log('handleSearch()');
    ajax.get(
        'http://localhost/wiki-regras-api/Campos/getCampo/'+document.getElementById("nome").value,
        success,
        error
    );
}

function success(response) {
    populateForm(response.content);
    showHideables();
    hideLoading();
    canReset = true;
}

function error(response) {
    console.log('erro - ', response);
}

function showLoading() {
    loading.style.display = 'block';
}

function hideLoading() {
    loading.style.display = 'none';
}

function populateForm(content) {
    descricao.value = content.descricao;
    document.getElementById('obrigatorio').checked = (content.obrigatorio == 1);
    buildRulesList(content.regras);
}

function showHideables() {
    for (var i = 0; i < hideables.length; i++) {
        hideables[i].style.display = 'block';
    }
}

function hideHideables() {
    for (var i = 0; i < hideables.length; i++) {
        hideables[i].style.display = 'none';
    }
}

function eraseEraseables() {
    var eraseables = document.getElementsByClassName('erasable');
    for (var i = eraseables.length - 1; i > -1; i--) {
        let elem = eraseables[i];
        elem.parentNode.removeChild(eraseables[i]);
    }
}

function buildRulesList(rules) {
    let total = rules.length;
    for (let i = 0; i < total; i++) {
        var node = document.createElement("LI");
        node.className = 'erasable';
        node.appendChild(document.createTextNode(rules[i].descricao));
        document.getElementById("error-list").appendChild(node);  
    }
}