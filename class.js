class Student {
  #email;
  constructor(name , email = `${name}@academico.ifpb.edu.br` , course = ''){
    this.name = name;
    this.#email = email;
    this.course = course;
    /* this é parecido com self em python */ 
    /* # serve como um __ para privação de propriedades */
  }
  userType(){
    let result = "Professor"
    const plogs = this.#email.split("@")[1]
    if ( plogs.includes("academico")){
      result = "Aluno"
    }
    return result
  }
}


const std1 = new Student("plogs","plogs@academico.ifpb.edu.br",  "tsi")
console.log(std1.userType())