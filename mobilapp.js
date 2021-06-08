function solucao(tempo, distancia) {
	if (tempo < 5) {
        console.log(6*100)
        
     }if (tempo>=5 && tempo <=60){
        let b = 50 * distancia
        console.log((tempo*100)+b)
         
    }if (tempo>60){
        if (distancia <100){
            let c = distancia*2
            console.log(c*100)
            
        }else{
            let d = distancia*1.5
            console.log(d*100)
        }
    }
}