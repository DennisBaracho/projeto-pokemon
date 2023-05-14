/* Pega o elemento do botão da troca de tema*/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

console.log(botaoAlterarTema)

/* Pegar o elemento do body. QuerySelector consulta um seletor (classe, tag)*/

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

/* Identificar o clique do usuário no botão. "Colocar uma escuta no botão" para detectar os cliques*/

botaoAlterarTema.addEventListener("click", () => {

    //Verificar se o body já tem a classe modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    //body vai alternar entre os dois estados, assim não precisa usar remove e add
    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo){
        //Trocar para a imagem do sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
        } else {
        //Trocar imagem do botão para lua
         imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
        }
});