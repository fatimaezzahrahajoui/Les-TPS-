
<?php

$name="Votre informations";

echo "<h1>$name</h1>";

$nom = strip_tags($_POST['nom']);
$email = strip_tags($_POST['email']);
$genre = strip_tags($_POST['genre']);
$mdp = strip_tags($_POST['mdp']);
$chekbox = strip_tags($_POST['checkbox']);

echo "<p><strong>Nom:</strong> $nom</p>";
echo "<p><strong>Email:</strong> $email</p>";
echo "<p><strong>Genre:</strong> $genre</p>";
echo "<p><strong>Mot de passe:</strong> $mdp</p>";
echo "<p><strong>statue:</strong> $chekbox</p>"
?>

