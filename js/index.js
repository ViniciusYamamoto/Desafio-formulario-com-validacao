// function linhaCor() {
//     let input = document.querySelectorAll('.dados');

//     console.log(input);

//     let primeiroDado = input[0];
//     primeiroDado.style.border = '2px solid green';
// }

// function linhaCor1() {
//     let input = document.querySelectorAll('.dados');

//     console.log(input);

//     let segundoDado = input[1];
//     segundoDado.style.border = '2px solid green';
// }

// function linhaCor2() {
//     let input = document.querySelectorAll('.dados');

//     console.log(input);

//     let terceiroDado = input[2];
//     terceiroDado.style.border = '2px solid green';
// }

// function linhaCor3() {
//     let input = document.querySelectorAll('.dados');

//     console.log(input);

//     let quartoDado = input[3];
//     quartoDado.style.border = '2px solid green';
// }

const campoSelecionado = document.querySelectorAll('.dados');
console.log(campoSelecionado)

function bordaSelecionada(event) {
    campoSelecionado.forEach((borda) => {
        borda.classList.remove('bordaVerificacao');
    });
    event.currentTarget.classList.add('bordaVerificacao');
}

campoSelecionado.forEach((borda) => {
    borda.addEventListener('onchange', bordaSelecionada);
})


function enviar() {
    let enviaDados = document.getElementById('botao');

    let verificaNome = document.getElementById('nomeCompleto').value;
    console.log(verificaNome)

    let verificaEmail = document.getElementById('email').value;
    console.log(verificaEmail)

    let verificaTelefone = document.getElementById('telefone').value;
    console.log(verificaTelefone)

    let verificaSugestao = document.getElementById('sugestao').value;
    console.log(verificaSugestao)


    if (verificaNome == "" || verificaNome == null) {
        document.getElementById('campo-obrigatorio').innerHTML = "<p>Campo obrigatório";
    }
    if (verificaEmail == "" || verificaEmail == null) {
        document.getElementById('campo-obrigatorio1').innerHTML = "<p>Campo obrigatório";
    }
    if (verificaTelefone == "" || verificaTelefone == null) {
        document.getElementById('campo-obrigatorio2').innerHTML = "<p>Campo obrigatório";
    }
    if (verificaSugestao == "" || verificaSugestao == null) {
        document.getElementById('campo-obrigatorio3').innerHTML = "<p>Campo obrigatório";
    }else{
        console.log('enviaDados');
        alert('Dados enviados.')
    }
}