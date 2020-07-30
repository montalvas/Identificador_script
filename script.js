
var botao = document.getElementById("action");
botao.addEventListener("click", clicar);

function clicar(){
    var date = new Date();
    var ano_atual = date.getFullYear();
    var ano = document.getElementById("nasc");

    if (ano.value.length == 0 || Number(ano.value) > ano_atual){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }
    else{
        var sexo = document.getElementsByName("sex");
        var idade = ano_atual - Number(ano.value);
        var genero = '';
        var photo = document.querySelector("div.photo");
        
        if (sexo[0].checked){
            genero = "Homem";
            photo.style.display = "block"

            if (idade <= 10){
                photo.style.backgroundImage = "url(img/kid_boy.png)";
            }
            else if (idade <= 25){
                photo.style.backgroundImage = "url(img/young_boy.png)"
            }
            else if (idade <= 50){
                photo.style.backgroundImage = "url(img/mature_boy.png)"
            }
            else{
                photo.style.backgroundImage = "url(img/old_men.png)"
            }
        }
        else if (sexo[1].checked){
            genero = "Mulher";
            photo.style.display = "block"

            if (idade <= 10){
                photo.style.backgroundImage = "url(img/kid_girl.png)";
            }
            else if (idade <= 25){
                photo.style.backgroundImage = "url(img/young_girl.png)"
            }
            else if (idade <= 50){
                photo.style.backgroundImage = "url(img/mature_girl.png)"
            }
            else{
                photo.style.backgroundImage = "url(img/old_woman.png)"
            }
        }
        else{
            window.alert("Gênero inválido!");
        }
        
        var text = document.querySelector(".res>p");
        text.innerHTML = `Detectado ${genero} com ${idade} anos.`;
    }

}
