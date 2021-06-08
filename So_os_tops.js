function solucao(produtos) {
	let b=0
    let dinheiro = 0
    for(item of produtos){
        if( item.preco>=10000){
            let preco= item.preco
            dinheiro= dinheiro + preco
        }
        let a = item.preco
        b = a+b
        item++
    }
    const resposta = {
        totalTop : dinheiro,
        percentual : dinheiro /  b
    }
    console.log(resposta)
}
