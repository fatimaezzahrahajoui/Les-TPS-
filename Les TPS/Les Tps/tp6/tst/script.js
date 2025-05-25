const imput = document.getElementById('input');

const addbtn = document.getElementById('add');

const lista = document.querySelector('.list')

addbtn.addEventListener('click', function (){
    if(imput.value.trim() === ''){
        alert("Please enter a value")
        imput.value = "";
        imput.focus();
        return; //bach iw9f lcode 7d had lfonction omaghadix icopiler dakchi lijay(ghaywsl return ghayw9f lcode)
    }

    lista.innerHTML += `<li> ${imput.value} <button onclick = 'rembtn(event)' > Remove </button> </li>`// DARORI tdir ` machi ' 7it ' makhdamach ||| bnsba l onclick = 'rembtn(event)'
                                                                                                       //y3ni fach idir l'utilisateure wa7d lclick 3la had lbutton 3yt 3la function rembtn 

    imput.value = "";
    imput.focus();

});

function rembtn(e){
    e.target.parentElement.remove();
}