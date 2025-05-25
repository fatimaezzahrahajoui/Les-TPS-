<?php
$nom = strip_tags($_POST['nom']);
$prenom = strip_tags($_POST['prenom']);
$mdp = strip_tags($_POST['mdp']);
$email = strip_tags($_POST['email']);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Réponse 2</title>
</head>
<body>
    <h1>Bienvenue, <?php echo $prenom ?> <?php echo $nom ?></h1>
    <h2>Votre mot de passe est: <?php echo $mdp ?></h2>
    <p>Votre email est: <?php echo $email ?></p>
</body>
</html>
