/* O peso dividido pela (altura ao quadrado) é igual a IMC */
var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var res = document.getElementById('res')

function calcular(){
    var p = Number(peso.value)
    var a = Number(altura.value)
    var imc = p/(a*a)
    res.innerHTML = `IMC: ${imc.toFixed(1)}`
    
    if (imc < 18.5){
        res.innerHTML += `<p> Classificação: Baixo peso </p>`
    } else if (imc >= 18.5 & imc <= 24.9){
        res.innerHTML += `<p>Classificação: Peso normal</p>`
    } else if (imc >= 25.0 & imc <= 29.9){
        res.innerHTML += `<p>Classificação: Excesso de peso</p>`
    } else if (imc >= 30.0 & imc <= 34.9){
    res.innerHTML += `<p>Classificação: Obesidade de Classe 1</p>`
    } else if (imc >= 35.0 & imc <= 39.9){
    res.innerHTML += `<p>Classificação: Obesidade de Classe 2</p>`
    } else if (imc > 40.0 ){
    res.innerHTML += `<p>Classificação: Obesidade de Classe 3</p>`
    }
}

function limpar(){
    peso.value = "" 
    altura.value = ""
    res.innerHTML = ""
}