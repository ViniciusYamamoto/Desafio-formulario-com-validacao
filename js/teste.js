const inputDados = document.querySelectorAll('.dados');
const btnEnviar = document.querySelector('#botao');
const textoCampo = document.getElementsByClassName('campo-obrigatorio');

function bordaSelecionada(){
    inputDados.forEach((item) => {
        item.addEventListener('input', () => {
            const valorInput = item.value.trim();
            if (valorInput !== "") {
                item.classList.add("bordaVerificada");
            } else {
                item.classList.remove("bordaVerificada");
            }
        })
    });
}
bordaSelecionada();

inputDados.forEach(item => {
    item.addEventListener('input', () => {
      const mensagemErro = item.nextElementSibling;
      mensagemErro.innerHTML = '';
    });
  });

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    let camposPreenchidos = true;

    inputDados.forEach((item) => {
        const mensagemErro = item.nextElementSibling;
        if (item.value.trim() === ""){
            camposPreenchidos = false;
            mensagemErro.innerHTML = "<p>Campo obrigatório</p>";
        } else {
            mensagemErro.innerHTML = "";
        }
    });

    if (camposPreenchidos) {
        alert('Dados enviados.');
    }     
});

