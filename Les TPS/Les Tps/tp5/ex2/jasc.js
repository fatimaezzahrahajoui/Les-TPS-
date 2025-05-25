//Faites un programme qui permet à l'utilisateur de deviner un nombre entre 1 et 10 choisi par 
//l'ordinateur au hasard en indiquant à chaque proposition (lue avec la fonction prompt) si le 
//nombre à deviner est plus grand ou plus petit que la proposition. Lorsque le nombre est trouvé 
//vous afficherez le « score » c'est à dire le nombre de tentatives nécessaires pour arriver à la 
//solution. 

// Génère un nombre aléatoire entre 1 et 10
const nombre1_10 = Math.floor(Math.random() * 10) + 1;
let nombre_try = 0;
let nombreUtil;


do{

    nombreUtil = parseInt(prompt("entrer un nomber : "))

   
    if(nombreUtil < nombre1_10){
        alert("Plus grand que ça")
        nombre_try++;

    }else if(nombreUtil > nombre1_10){
        alert("Plus petit que ça")
        nombre_try++;

    }else if(nombreUtil === nombre1_10){
        nombre_try++;
        alert("bravo,Vous avez trouvé le nombre la "+ nombre_try + " ème fois")

    }else{
        alert("entrez un numéro valide")
    }


}while(nombreUtil !== nombre1_10)

