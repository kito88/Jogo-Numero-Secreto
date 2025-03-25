/* varaivel do Titulo
let  titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Numero Secreto';
//variavel do paragrafo
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um Numero entre 1 e 10';*/

//variavel numero Secreto
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirNovo();
exibirTexto('h1' , 'Jogo do Numero Secreto');
exibirTexto('p', 'Escolha um Número entre 1 a 100');

//criando uma função para o botao CHUTAR
function verificarChute(){
    let chute = document.querySelector('input').value;
    /* console.log(chute);
    console.log(chute == numeroAleatorio); */
    if(chute == numeroAleatorio){
        exibirTexto('h1','Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns Trouxa Você Acertou! com ${tentativas} ${palavraTentativa} !`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        //document.getElementsByTagName("H1")[0];h1.setAttributeNode(att);
    }else{
        exibirTexto('h1','Errou')
        if(chute > numeroAleatorio){
        exibirTexto(`p`,`O Numero Secreto é Menor`);
        }else{
            exibirTexto('p','O Número Secreto é Maior');
        }
        tentativas++;
        limparCampo();
    }
}


//Função numero aleatorio
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}
//função de Limpar o Campo
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = " ";
}
function exibirNovo(){
    exibirTexto('h1' , 'Jogo do Numero Secreto');
    exibirTexto('p', 'Escolha um Número entre 1 a 100');
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirNovo();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}