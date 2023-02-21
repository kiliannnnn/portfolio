<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title> Accueil </title>

    <!-- stylesheet responsive-->
    <link rel="stylesheet" href="style/mobile.css">
    <link rel="stylesheet" media="screen and (width > 450px)" href="style/tablet.css">
    <link rel="stylesheet" media="screen and (width > 1020px)" href="style/laptop.css">
    <link rel="stylesheet" media="screen and (width > 1440px)" href="style/desktop.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="jquery-3.6.3.min.js"></script>
    <script src="script/script.js"></script>
</head>
<header>
    <nav>
        <ul>
            <li><a href="#home"><img src="assets/accueil.png"></a></li>
            <li><a href="#projects"><img src="assets/projet.png"></a></li>
            <li><a href="#skills"><img src="assets/skills.png"></a></li>
            <li><a href="#curriculum"><img src="assets/destination.png"></a></li>
            <li><a href="#contact"><img src="assets/contact.png"></a></li>
        </ul>
    </nav>
</header>
<body>
    <section id="home" class="uneven">
        <h1>Kilian COUDURIER</h1>
        <h4>J'ai 20 ans, je suis étudiant et passionné d'informatique<br>
        Curieux, j'adore découvrir et apprendre de nouvelles choses<br>
        </h4>            
    </section>
    <section id="projects" class="even">
        <h2>Quelques projets</h2>
        <div class="container">
            <div class="flipcard">
                <div class="front"><p>Ce site internet</p></div>
                <div class="back"><p>Construit avec html, php et scss, en mobile first</p></div>
            </div>
        </div>
    </section>
    <section id="skills" class="uneven">
        <h2>Connaissances</h2>

    </section>
    <section id="curriculum" class="even">
        <h2>Mon parcours</h2>
        <div class="container">
            <div class="flipcard">
                <div class="front"><p>BTS SIO<br>2021-2023</p></div>
                <div class="back"><p>Lycée privée Saint-Michel<br>27 Fbg des Balmettes, 74000 Annecy</p></div>
            </div>
        </div>
        <div class="container">
            <div class="flipcard">
                <div class="front"><p>BTS GTLA<br>2020-2021</p></div>
                <div class="back"><p>Lycée professionnel Gabriel Voisin<br>21 Av. de Jasseron, 01000 Bourg-en-Bresse</p></div>
            </div>
        </div>
        <div class="container">
            <div class="flipcard">
                <div class="front"><p>STI2D<br>2019-2021</p></div>
                <div class="back"><p>Lycée de l'Albanais<br>2 Rue du Lycée, 74150 Rumilly</p></div>
            </div>
        </div>
        <div class="container">
            <div class="flipcard">
                <div class="front"><p>du CM2 à la Seconde générale<br>2013-2019</p></div>
                <div class="back"><p>Groupe scolaire Demotz de la salle<br>2 Rue du Collège, 74150 Rumilly</p></div>
            </div>
        </div>
    </section>
    <section id="contact" class="uneven">
        <h2>Me contacter</h2>
        <ul id="social">
            <li><a href="https://github.com/kiliannnnn"><img src="assets/github.png"></a></li>
            <li><a href="https://www.linkedin.com/in/kilian-coudurier-a59469229/"><img src="assets/linkedin.png"></a></li>
        </ul>
        <ul>
            <li>+33 7 82 43 07 53</li>
            <li>coudurier.kilian@gmail.com</li>
            <li><h2>ou</h2></li>
        </ul>
        <form action="send_mail.php" method="POST">
            <label for="sender"></label>
            <input type="email" name="sender" required placeholder="Votre adresse e-mail">
            <label for="subject"></label>
            <input type="text" name="subject" required placeholder="Objet">
            <label for="message"></label>
            <textarea name="message" required placeholder="Votre message"></textarea>
            <input id="submit" type="submit">
        </form>
    </section>
</body>
<footer>
    
</footer>
</html>