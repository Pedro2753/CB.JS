let valora = document.getElementById('valora')
let valorb = document.getElementById('valorb')
let res = document.getElementById('res')
select = document.getElementById("operacao")
value = select.value

function selecionar(){
select = document.getElementById("operacao")
value = select.value

}

function soma(){
    let a = Number(valora.value)
    let b = Number(valorb.value)
    let r = a + b
    res.innerHTML = ` Resultado: ${r} `
}

function subtracao(){
    let a = Number(valora.value)
    let b = Number(valorb.value)
    let r = a - b
    res.innerHTML = `Resultado: ${r}`
}

function multiplicacao(){
    let a = Number(valora.value)
    let b = Number(valorb.value)
    let r = a * b
    res.innerHTML = `Resultado: ${r}`
}

function divisao(){
    let a = Number(valora.value)
    let b = Number(valorb.value)
    let r = a / b
    res.innerHTML = `Resultado: ${r}`
}


function verificar(){
    selecionar()
    if (value === "1") {
    soma()
    }
   else if (value === "2") {
    subtracao()
    }

    else if (value === "3"){
    multiplicacao()
    }

   else if (value === "4"){
    divisao()
    } else {
        alert('Erro')
}
}

function limpar(){
    valora.value = ""
    valorb.value = ""
    select.value = ""
    res.innerHTML = ``
}
