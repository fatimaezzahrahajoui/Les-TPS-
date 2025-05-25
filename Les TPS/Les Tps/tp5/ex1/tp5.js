//Écrivez un script JavaScript qui demande à l'utilisateur de saisir deux nombres, puis affiche la 
//somme, la différence, le produit et le quotient de ces deux nombres dans la console.

let a = parseInt(prompt("entrer un nombre : ")) 
let b = parseInt(prompt("autre nombre : "))


console.log("la somme est : " + (a+b))
console.log("la différence est : " + (a-b))
console.log("la produit est : " + (a*b))
if (b !== 0){
    console.log("la quotient est : " + (a/b))
}else {
    console.log("deuxeime nombre should be defferent to 0")
}
