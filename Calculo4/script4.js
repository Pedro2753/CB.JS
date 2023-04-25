var placarj = 0
var placaro = 0

function jogar() {
    var jokenRadio =  document.querySelector('input[name=jokenpo]:checked').value
    var res = document.getElementById('res')
    var opcoes = ['pedra', 'papel', 'tesoura']
    var escolhaComputador = Math.floor(Math.random() * opcoes.length)
    var e = opcoes[escolhaComputador]

    res.innerHTML = ""
    /*
    function showquote(){
        res.innerHTML = opcoes[escolhaComputador];
    }
    showquote();
     
   

    res.innerHTML += jokenRadio
    */

    res.innerHTML += `<p>Você escolheu ${jokenRadio}</p>`
    res.innerHTML += `<p> O oponente escolheu ${e}</p>`

    if (jokenRadio === e) {
        res.innerHTML += `<p>O jogo empatou</p>`
        placar('e')
    } else if ((jokenRadio === 'papel' & e ==='pedra' ) || 
    (jokenRadio === 'tesoura' & e === 'papel' ) ||
    (jokenRadio === 'pedra' & e === 'tesoura')) {
        res.innerHTML += "<p>Você venceu o jogo</p>"
        placar('v')
    } else {
        res.innerHTML += "<p>Você perdeu o jogo</p>"
        placar('p')
    }

    function placar(a) {

            if (a == 'v') {
                placarj++
            } else if (a == 'p'){
                placaro++
            } else if (a == 'e'){
                
            }
            res.innerHTML += `Placar: Jogador ${placarj} X ${placaro} Oponente `
    }


}