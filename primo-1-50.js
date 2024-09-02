for (let i = 2; i <= 50; i++) {
  let primo_verificado = 0
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      primo_verificado++
    }
  }
  if (primo_verificado === 0) {
    console.log(i + ' é primo')
  }
}
  



    