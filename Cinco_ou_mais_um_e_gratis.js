function solucao(precos) {
    let a =0
    let b= 0
    let min= Math.min.apply(null, precos);
    for (a of precos){
        a = a + b
        b = a
        a++
        }
    if (precos.length >= 5){
           b=b-min
        }
    console.log(b)
}