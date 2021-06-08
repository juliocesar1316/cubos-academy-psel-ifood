function solucao(ano) {
    let contador = 2014
     let a = 2014
     let b =2016
     
     while (contador <= ano){
         a= a + 4
         b = b + 4
         contador+=4
     if (a==ano){
         console.log("COPA")
         break
     }if (b==ano){
         console.log("JOGOS")
         break
     }}
     if(ano != a && ano != b){
       console.log("MEH")}
}
