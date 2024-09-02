function somatodos(vetor){
let soma = 0
  for (let i = 0; i < vetor.length; i++ ){
    soma = vetor[i] + soma
  }
  return soma
}


function somaImpares(...vetor){
  let soma = 0
  for (let i = 0; i < vetor.length; i++){
    if (vetor[i] % 2 != 0 ){
    // sum = sum + (vetor[i]%2!==0)?vetor[i]:0
      soma = vetor[i] + soma
    }
  return soma
    
  }
}




function multiplicador(vetor){
  let resultado = 1
  for (let i = 0; i < vetor.length ; i++){
    resultado = vetor[i] * resultado
  } 
  return resultado
}

const listatodos = [1,2,3]
console.log(somaImpares(listatodos))
