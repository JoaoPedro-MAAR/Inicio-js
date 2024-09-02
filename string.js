// Criação de string 
const str1 = "String" // Ou const str1 = 'String'
// Pode criar assim porem o tipo não sera uma String e sim um objeto
const str2 = new String("String")

console.log(str2)
// Outro tipo 

const strTemplateLiterals = ``;
// Usar o templateliterals seria como usar um format em pyhton
const nome = "João"
const idd = 17
const email = "araujo.aragao@academico.ifpb.edu.br"
console.log(`Informações : ${nome} , ${idd} , ${email}`)
const sla = "\"Eu gosto de macarrão\" afirmou ela   "
console.log(sla)
console.log(sla.length)


console.log(sla.replace(/macarrão/gi , 'bosta'))

// Trim

console.log('    Olá, Mundo       '.trimEnd())
console.log('    Olá, Mundo       '.trimStart())

// Pad

console.log(' 4,10'.trim().padStart(8, '0'))

// Pad adiciona se o parametro passando for maior que a string

// SubString

console.log('linguagens de script'.substring(5,7))

// Faz um corte de certo indice até o outro

// Substr , faz um corte a parte do indice(no caso 5) e corta ate os proximos 7 caracteres

console.log('linguagens de script'.substr(5,7))

// Slice tem uma funcionalidade igual a da substring podendo ser indexado com o menos também





