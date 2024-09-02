export function ehprimo(n)
let primo_verificado = 0
const primo = 7
for (let i = 2; i < primo; i++) {
  if (primo % i === 0) {
    primo_verificado++
  }
}

if (primo_verificado > 0) {
  console.log('Não primo')
} else {
  console.log('Primo')
}



