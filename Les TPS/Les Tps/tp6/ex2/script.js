let list = document.querySelector('.list');

let button = document.getElementById('ajtButton');

let input = document.getElementById('input');

button.addEventListener('click', function() {

    if(input.value.trim() === ''){
        alert("Please enter a value")
        input.value = "";
        input.focus();
        return;
    }
    list.innerHTML += `<li id="arida"> ${input.value} <button onclick="removeItm(event)">Remove</button>
    <button onclick="accomplie(event)">Accomplie</button>
    </li>`;

    input.value = "";
    input.focus();
})

function removeItm(e){
    e.target.parentElement.remove();
}

function accomplie(e){
    e.target.parentElement.classList.toggle('completed');

}