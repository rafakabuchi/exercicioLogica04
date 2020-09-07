function calcular() {
    var num = Number(document.getElementById('entradaNumero').value)
    var resultado = document.getElementById('resultado')

    // resultado.innerHTML = `<p>O número digitado foi ${num}</p>`
    if (num % 2 == 0) {
        resultado.innerHTML = `<p> o número digitado é <strong>PAR</strong></p>`
    } else {
        resultado.innerHTML = `<p>o número digitado é <strong>IMPAR</strong></p>`
    }
}


function inverter() {
    var num1 = Number(document.getElementById('primeiroNumero').value)
    var num2 = Number(document.getElementById('segundoNumero').value)
    var numtemp = num1

    num1 = num2
    num2 = numtemp

    // [num1, num2] = [num2, num1]

    var troca = document.getElementById('resInverter')

    troca.innerHTML = `<p>os números digitados, invertidos são: ${num1} e ${num2}</p>`
}

function salario() {
    var sal = Number(document.getElementById('inserirSalario').value)
    var total = document.getElementById('aumento')

    // resultado.innerHTML = `<p>Você recebe atualmente ${sal}</p>`
    if (sal >= 1500) {
        total.innerHTML = `<p>Seu aumento é de 10%. No valor de R$ ${sal*10/100}. E total do novo salário será R$ ${sal+(sal*10/100)} </p>`
    } else {
        total.innerHTML = `<p>Seu aumento é de 12%. No valor de R$ ${sal*12/100}. E total do novo salário será R$ ${sal+(sal*12/100)} </p>`
    }
}


function zerar() {
    document.getElementById('entradaNumero').value = ''
    document.getElementById('primeiroNumero').value = ''
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('segundoNumero').value = ''
    document.getElementById('inserirSalario').value = ''
    document.getElementById('resInverter').innerHTML = ''
    document.getElementById('aumento').value = ''
    document.getElementById('aumento').innerHTML = ''
}