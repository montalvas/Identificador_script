/*
background-image: url(img/kid_boy.jpg);
    background-size: cover;
    background-position: center;
*/

var botao = document.getElementById("action");
botao.addEventListener("click", clicar);

function clicar(){
    var date = new Date();
    var ano_atual = date.getFullYear();
    var ano = document.getElementById("nasc");
    var res = document.querySelector("div.res");
    

    if (ano.value.length == 0 || Number(ano.value) > ano_atual){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }
    else{
        var sexo = document.getElementsByName("sex");
        var idade = ano_atual - Number(ano.value);
        var genero = '';

        var photo = document.createElement('div');
        photo.setAttribute('id', 'photo');
        photo.style.width = "300px";
        photo.style.height = "300px";
        photo.style.margin = "auto";
        photo.style.borderRadius = "50%";
        photo.style.backgroundColor = "grey";
        
        if (sexo[0].checked){
            genero = "Homem";
        }
        else if (sexo[1].checked){
            genero = "Mulher";
        }
        else{
            window.alert("Gênero inválido!");
        }

        
    }

}
