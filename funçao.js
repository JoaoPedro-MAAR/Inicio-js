const divisao = (a, b = 1) => {
  if (b === 0) {
    return 'Não é possivel dividir por 0'
  }
  return a / b
}

console.log(divisao(10, 2))


// Quando uma funçao pode ter apenas uma linha e essa linha for um return podemos reduzir

// Nessa parte const divisao = (a, b = 1) o b=1 significa o valor default

const soma = (n1,n2)=>{
  return n1 + n2
}

const multiplicação = (n1,n2) => n1 * n2