function carrinhoCompras(params){
    const soma = params.reduce((previous,current) => previous + current , 0);
    return soma
}


console.log(carrinhoCompras([10,20,30]))