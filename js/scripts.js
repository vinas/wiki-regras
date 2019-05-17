var ajax = Ajax(),
    canReset = true;

document.getElementById("nome").addEventListener("keydown", function(e) {
    if (e.which == 13) {
        handleSearch();
        return;
    }
    if (canReset) {
        console.log('reset');
        document.getElementById('loading-img').style.display = 'none';
        canReset = false;
    }
});

function handleSearch() {
    console.log('handleSearch()');
    ajax.get(
        'http://localhost/wiki-regras-api/Campos/getCampo/'+document.getElementById("nome").value,
        success,
        error
    );

    document.getElementById('loading-img').style.display = 'block';
    canReset = true;
}

function success(response) {
    document.getElementById('descricao').value = response.content.descricao;
    document.getElementById('loading-img').style.display = 'none';
}

function error(response) {
    console.log('erro - ', response);
}
