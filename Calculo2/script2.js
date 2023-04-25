var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var idade = document.getElementById('idade')
var res = document.getElementById('res')
var select = document.getElementById('af')
var value = select.value
var masRadio = document.querySelector('input[value="mas"]');
var femRadio = document.querySelector('input[value="fem"]');

function selecionar(){
    select = document.getElementById('af')
    value = select.value
    
    }

function calcular(){

    var p = Number(peso.value)
    var a = Number(altura.value)
    var i = Number(idade.value)

    selecionar()
    var tmb = 0
    if (p >= 1 & a >= 1 & i >= 1 & value != "0" & masRadio.checked | femRadio.checked){
    if (masRadio.checked){
        tmb = (13.75 * p)+(5 * a)-(6.76 * i)+66.5
    } else if (femRadio.checked){
         tmb = (9.56 * p)+(1.85 * a)-(4.68 * i)+66.5
    } else {
        alert('Selecione um opção')
    }
    
    res.innerHTML = `TMB: ${tmb.toFixed(1)} cal`
   

    var r = 0
    if (value === '1'){
       r = tmb*1.2
    } else if (value === '2') {
        r = tmb*1.375
    }   else if (value === '3'){
        r = tmb*1.55
    } else if (value === '4'){
        r = tmb*1.725
    } else if (value === '5'){
        r = tmb*1.9
    }

    var r2 = r - 500
    res.innerHTML += `<p> Gasto energético real: ${r.toFixed(1)} cal</p>`
    res.innerHTML += `<p> Ingestão indicada de calorias por dia para perder 0.5 kg por semana: ${r2.toFixed(1)} calorias`


} else {
alert('Insira todos as informações.')
}
}

function limpar(){
   peso.value = "" 
   altura.value = ""
   idade.value = ""
   select.value = "0"
   masRadio.checked = false
   femRadio.checked = false
   res.innerHTML = ""
}