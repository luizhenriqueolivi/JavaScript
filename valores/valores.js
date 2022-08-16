let valores = [6, 1, 7, 4, 2, 5]
valores.sort()
console.log (valores)
console.log (`Esse vetor tem ${valores.length} posições`)

for (let pos=0; pos < valores.length; pos++){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}
for (let pos in valores ){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}
let pos = valores.indexOf(3)
    if (pos == -1){
        console.log ('O valor referido não foi encontrado')
    } else {
        console.log (`O valor está na posição ${pos}`)
    }
    