let caminhoCurriculo = "./curriculo.pdf"

let botaoBaixarCurriculo = document.querySelector("#botao-curriculo")
console.log(botaoBaixarCurriculo)

botaoBaixarCurriculo.addEventListener("click", function(){
    console.log("clicou!");
    let tagA = document.createElement("a")
    console.log(tagA);

    tagA.href = caminhoCurriculo
    tagA.download = "curriculo.pdf"
    tagA.click()
})