function calcular() {

    /*inserção de dados */
    var valorA = document.getElementById("valorA").value;
    var valorB = document.getElementById("valorB").value;

    /*seleciona a operação */
    var multiplicacao = document.getElementById("multiplicacao").checked;
    var divisao = document.getElementById("divisao").checked;
    var adicao = document.getElementById("adicao").checked;
    var subtracao = document.getElementById("subtracao").checked;
      


    /*execusão das operações */
    if (multiplicacao == true){
        var resultado = parseFloat(valorA) * parseFloat(valorB);
        document.getElementById("resultado").innerHTML = (resultado);
    }

    if (divisao == true){
        var resultado = parseFloat(valorA) / parseFloat(valorB);
        document.getElementById("resultado").innerHTML = (resultado);
    }

    if (adicao == true){
        var resultado = parseFloat(valorA) + parseFloat(valorB);
        document.getElementById("resultado").innerHTML = (resultado);
    }

    if (subtracao == true){
        var resultado = parseFloat(valorA) - parseFloat(valorB);
        document.getElementById("resultado").innerHTML = (resultado);
    }


    /*mensagens de erros*/
    if (multiplicacao == false && divisao == false && adicao == false &&
        subtracao == false && valorA == "" && valorB == ""){
        document.getElementById("resultado").innerHTML = ("Você deve inserir valores válidos para A e B. Após escolha uma operação!");
    }

    if (multiplicacao == false && divisao == false && adicao == false &&
        subtracao == false && valorA !== "" && valorB !== ""){
        document.getElementById("resultado").innerHTML = ("Você deve escolher uma operação!");
    }
    
}