//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNumerosSorteados = [];
let listaAmigos = []
function exibirTexto(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let input = document.getElementById('amigo').value
    if(input == ''){
        exibirTexto('subtitle', 'Insira um nome para poder adicionar')
    } else {
        let nomeAmigo = document.querySelector('input').value;
        listaAmigos.push(nomeAmigo)
        console.log(listaAmigos)
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = nomeAmigo;
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus()
        document.getElementById('listaAmigos').appendChild(novoAmigo);
    }
}
//criei um "listener" para que quando o usuario esteja digitando no campo de adicionar amigo 
// e pressione enter, ele consiga adcionar um amigo
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});


//funcao antiga que tentei implementar
// function sortearAmigo(){
//     if(listaAmigos.length >=2){
//         let numeroSorteado = parseInt(Math.random() * listaAmigos.length +1)
//         listaDeNumerosSorteados.push(numeroSorteado);

//         if(listaDeNumerosSorteados.includes(numeroSorteado)){
//             sortearAmigo()
//         }else {
//         console.log(listaDeNumerosSorteados)
//         exibirTexto('resultado', listaAmigos[numeroSorteado -1])
//         }
        
//     }else {
//         exibirTexto('subtitle', 'Adicione pelo menos 2 nomes')
//     }
// }

function sortearAmigo(){
    if(listaAmigos.length >=2){
        if(listaDeNumerosSorteados.length >= listaAmigos.length){
            exibirTexto('subtitle', 'todos os amigos já foram sorteados')
            document.getElementById('botaoSortear').disabled = true;
            return;
        }

        let numeroSorteado;
        do {
            numeroSorteado = Math.floor(Math.random()* listaAmigos.length)
        } while (listaDeNumerosSorteados.includes(numeroSorteado))
            

            listaDeNumerosSorteados.push(numeroSorteado);
            console.log(listaDeNumerosSorteados)
            exibirTexto('resultado', `Seu amigo secreto é ${listaAmigos[numeroSorteado]}!`)
    } else {
        exibirTexto('subtitle', 'Adicione pelo menos 2 nomes')
    }
}