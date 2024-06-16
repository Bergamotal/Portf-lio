//Conta o número de linhas
var lineId = 0;

function addElements() {
    //Acha os id's das inputs e extrai o valor digitado neles
    var name = String(document.querySelector("#game").value);
    var genre = String(document.querySelector("#genre").value);
    var character = String(document.querySelector("#character").value);

    if (name.length < 1 || genre.length < 1 || character.length < 1){
        alert("Preencha todos os campos para inserir um jogo!");
    } else {
        //Puxa o HTML da tabela
        var table = document.getElementById("tabela");

        //Cria uma linha onde as informações serão armazenadas
        var row = document.createElement("tr");
        var newid = String(lineId);
        row.setAttribute("id",newid);

        //Cria as colunas
        //Conta o número de células criadas pela variável "colId"
        //"colId" é passado como id de cada célula
        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");
        var col4 = document.createElement("td");

        //Adiciona um botão de edição a cada célula
        //É passado como argumento o número da coluna e o id da linha
        var newButton = addEditButton(0,row.id);

        //Adiciona as informações nas colunas
        col1.innerText = name;
        col1.appendChild(newButton);

        //O botão é criado novamente e adicionado à árvore DOM de cada coluna da tabela
        newButton = addEditButton(1,row.id);

        //Adiciona o botão como "filho" da coluna e o seu texto interno é o que o usuário digitou
        col2.innerText = genre;
        col2.appendChild(newButton);

        newButton = addEditButton(2,row.id);

        col3.innerText = character;
        col3.appendChild(newButton);

        var botRemove = document.createElement("button");
        botRemove.addEventListener("click", function () {remove(row.id)});
        botRemove.innerText = "X";

        col4.appendChild(botRemove);

        //Adiciona as colunas como filhos da classe linha
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);

        //Adiciona a linha contendo as colunas como filha na classe tabela
        table.appendChild(row);

        alert("Jogo adicionado com sucesso!");
        lineId++;
    }
}

function remove(idLinha) {
    var line = document.getElementById(idLinha);
    line.remove();
    lineId--;
}

function edit(idColuna, idLinha){
    var newContent = prompt("Digite a nova informação:");

    if(newContent == null || newContent.length < 1){
        alert("Nada foi inserido!");
    } else {
        var linha = document.getElementById(idLinha);
        var colunas = linha.getElementsByTagName("td");

        var novoBotao = addEditButton(idColuna, idLinha);

        colunas[idColuna].innerText = newContent;
        colunas[idColuna].appendChild(novoBotao);

        alert("Conteúdo alterado com sucesso!");
    }
}

function addEditButton(buttonId, rowId) {
    botEdit = document.createElement("button");
    botEdit.addEventListener("click", function () {edit(buttonId, rowId)});
    botEdit.setAttribute("class","editButton");
    var domain = '<img src="15183b88d66f6462454f8ce7c48552f5-removebg-preview.png">';
    botEdit.innerHTML = domain;

    return botEdit;
}