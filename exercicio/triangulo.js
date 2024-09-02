export function trianguloverifier(l1,l2,l3){

  if (l1 + l2 < l3){
    
    return 'Nao é triangulo'
  }
  if (l2 + l3 < l1){
    
      return 'Nao é triangulo'
    }
  if (l1 + l3 < l2){
   
      return 'Nao é triangulo'
    }
  else{
    if ((l1 == l2) && (l1 == l3)){
      return 'É equilatero'
    }

    if ((l1!=l2)&&(l1!=l3)&&(l3!=l2)){
      return 'Escaleno'
    }
    else{
      return 'Isoceles'
    }
    }
  }



console.log(trianguloverifier(3,4,5))


*/ para exportarmos função precisamos usar a palavra reservada export antes da função /*