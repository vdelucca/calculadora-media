document.getElementById("novocalculo").style.display = "none";

function calcularMedia(){

    //Pegando os valores digitados pelo usuário
    let nome = document.getElementById("nome").value;
    let disciplina = document.getElementById("disciplina").value;
    
    //Pegando os valores digitados pelo usuário e convertendo para número
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let n4 = Number(document.getElementById("nota4").value);

    if(nome == "" || disciplina == "" || n1 == "" ||
    n2 == "" || n3 == "" || n4 == "") {
    alert("Preencha todos os campos!")
    }

    else{
        //Operações matemáticas
        let soma = n1 + n2 + n3 + n4;
        let media = soma / 4;

        //Verificar situação do aluno
        let situação; //Classificar se foi aprovado, recuperação ou reprovado
        let classeSituacao; //estilizar a cor (css)

        if(media >=7){
            situacao ="APROVADO"
            classeSituacao ="aprovado"
        }

        else if(media >= 5){
            situacao = "EM RECUPERAÇÃO";
            classeSituacao = "recuperacao";
        }

        else{
            situacao ="REPROVADO";
            classeSituacao ="reprovado"
        }

        //Exibir o resultado

        let resultado = document.getElementById("resultado");

        resultado.innerHTML =
        "Aluno: " + nome + "<br><br>" +
        "Disciplina: " + disciplina + "<br><br>" +
        "Média: " + media + "<br><br>" +
        "Situação: <span class='" + classeSituacao + "'>" + situacao + "</span>";

        document.getElementById("Novocalculo").style.display = "block";
        document.getElementById("calcular").style.display = "none";

    }

}

function calcularNovo(){
    let nome = document.getElementById("nome").value = "";
    let disciplina = document.getElementById("disciplina").value="";

    let n1 = Number(document.getElementById("nota1").value = "");
    let n2 = Number(document.getElementById("nota2").value = "");
    let n3 = Number(document.getElementById("nota3").value = "");
    let n4 = Number(document.getElementById("nota4").value = "");

    let resultado = document.getElementById("resultado")
    .textContent = "Preencha os dados acima e clique em calcular média";
    
    document.getElementById("Novocalculo").style.display = "none";
    document.getElementById("calcular").style.display = "block";
}
