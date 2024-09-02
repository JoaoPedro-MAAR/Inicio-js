/* Adicionar elementos */

const vetor = [3]
console.log(vetor)
/* criado o vetor */
vetor.push(10)
console.log(vetor)
/* botado um elemnto no final do vetor(podem ser varios) */
vetor.unshift(2);
console.log(vetor)
/* Incrementado um valor ao começo do vetor */
vetor.splice(2, 0, 5)
console.log(vetor)
/* imendando no indice 2 , excluindo 0 elementos a sua frente , e colocando o valor 5(podem ser mais elementos) */
console.log(vetor.length)
/* Função para descobrir o tamanho do VETOR

/* Remoção de Arrays */

vetor.pop();
console.log(vetor);
/* Tira o elemento com o indice maior do vetor */
vetor.shift()
console.log(vetor)
/* Tira o elemento com o indice zero do vetor */
vetor.splice(1, 1);
console.log(vetor)
/* Splice pode ser utilizado para remover */




/* Fim das remoções */ 

const vetor2 = [1,2,3]
console.log(vetor2.join(','))
/* Tira os colchetes e separam o elementos com virgula */         

const v1 = [1 , 2 , 3]
const v2 = [4,5,6]
const v_matriz = [v1 , v2]
console.log(v_matriz)
/* Cria uma matriz */

const v_junção = [...v1 , ...v2]
console.log(v_junção)
/* Cria uma novo veto com todos os elementos dos outros dois */
console.log(v1.includes(1))
/* Checa se isso existe no vetor retornando booleano */ 