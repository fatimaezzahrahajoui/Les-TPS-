<?php
$nom = strip_tags($_POST['nom']);
$prenom = strip_tags($_POST['prenom']);
$mdp = strip_tags($_POST['mdp']);
$email = strip_tags($_POST['email']);

echo "<h2>Résultat (méthode 1)</h2>";
echo "<p>Nom: $nom</p>";
echo "<p>Prénom: $prenom</p>";
echo "<p>Mot de passe: $mdp</p>";
echo "<p>Email: $email</p>";
echo '<p><a href="reponse2.php">Voir la réponse 2</a></p>';
?>
