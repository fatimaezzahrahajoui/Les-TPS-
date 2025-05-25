const questions = [
    ["Quelle est la capitale de la maroc ?", "rabat"],
    ["Combien font 5 + 2 ?", "7"],
    ["Quel est le langage utilisé pour créer des pages web interactives ?", "javascript"]
];


function lancerQuiz() {
    let reponsesCorr = 0;

    
    for (let i = 0; i < questions.length; i++) {
        let jawab = prompt(questions[i][0]);
        if(jawab === questions[i][1]){
            alert("bonne reponse")
            reponsesCorr++;
        }else{
            alert("pas correct")
        }
        
    }
    alert("le score est : " + reponsesCorr + " sur " + questions.length);

   
}

lancerQuiz();
