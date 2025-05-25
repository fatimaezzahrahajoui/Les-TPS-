const mondiv = document.getElementById('mondiv');
const paragraph = document.getElementById('parag');


paragraph.textContent = 'Le texte a été modifié';


paragraph.style.color = 'lightblue';
paragraph.style.textAlign = 'center';


mondiv.addEventListener('click', function() {
    paragraph.textContent = 'Un click a été détecté';
});