function checarInputs(inputs) {
  let preenchido = true

  inputs.forEach((item) => {
    if (item.value === '') {
      preenchido = false
    }
  })

  return preenchido
}


let inputs = document.querySelectorAll('input')
let button = document.querySelector('#button')


inputs.forEach((item) => {
  item.addEventListener('keyup', () => {
    if (checarInputs(inputs)) {
      button.disabled = false
      button.classList.add('enabled')
    } else {
      button.disabled = true
      button.classList.remove('enabled')
    }
  })
})

function mensagem(imc){

  const resultado = document.querySelector('#resposta')
  const nome = document.querySelector('#nome').value

  if (imc < 18.5) {
    resultado.innerHTML = `Olá ${nome}, seu IMC é: ${imc} Abaixo do peso`
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `Olá ${nome}, seu IMC é: ${imc} Peso Ideal (parabéns)`
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `Olá ${nome}, seu IMC é: ${imc} Levemente acima do peso`
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = `Olá ${nome}, seu IMC é: ${imc} Obesidade grau 1`
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `Olá ${nome}, seu IMC é: ${imc} Obesidade grau 2 (severa)`
  } else {
    resultado.innerHTML = `Olá ${nome}, seu IMC é: ${imc} Obesidade grau 3(mórbida)`
  }
}

// funcao do calculo imc 
function calcularImc() {
  const peso = Number(document.querySelector('#peso').value)
  const altura = Number(document.querySelector('#altura').value)

  const imc = Number(peso / (altura ** 2)).toFixed(2)

  mensagem(imc)
}

// ação
button.addEventListener('click', calcularImc)


