// Conversion de température de Celsius à Fahrenheit
// je tien as préciser il y as 600 lignes de js mais j'ais espacer toutes 
//les fonctions afin de pas faire d'erreur
// et je pense j'ai commenter un peu trop
// j'ai utiliser pas mal de données que je pouvais utiliser de fonction que d'autre avait déja fait
//exemple pour l'heure actuel ou les conversions usd en euro ou les dégres
// j'ai également utiliser des program que j'avais fait en maths en python
//mon code le plus compliqué est le pierre feuille sciseaux
//mais j'avais déja la logique qui est identique au dé 
//note personnel essayer de faire moins de ligne inutiles ou d'espace même si ces plus agréable c'est dur de ce retrouver

function convertirTemperature() {
    let celsius = prompt("Entrez une température en Celsius :"); // Saisie de la température en Celsius
    let fahrenheit = (celsius * 9) / 5 + 32; // Calcul de la conversion en Fahrenheit (ne surtout pas modifier cette formule, elle est essentielle)
    document.getElementById("conversion").innerText = `${celsius}°C = ${fahrenheit}°F`; // Affichage du résultat
}

// Affichage du code source pour convertir la température
function afficherCode() {
    const code = `
// Conversion de température de Celsius à Fahrenheit
function convertirTemperature() {
    let celsius = prompt("Entrez une température en Celsius :");
    let fahrenheit = (celsius * 9) / 5 + 32; // Ne pas changer la formule, elle est mathématiquement correcte
    document.getElementById("conversion").innerText = \`\${celsius}°C = \${fahrenheit}°F\`;
}`;
    document.getElementById("code1").innerText = code; // Le code apparaît dans la page
}

// Ajustement de la taille du texte
let taille = 16; // Taille initiale du texte en pixels (ne pas modifier la valeur initiale sans ajuster les fonctions)

function augmenterTaille() {
    taille += 2; // Augmente la taille de 2px (modifier uniquement si l'augmentation doit être différente)
    document.getElementById("texte").style.fontSize = `${taille}px`; // Mise à jour du style
}

function reduireTaille() {
    taille -= 2; // Réduit la taille de 2px (changer la valeur peut impacter l'expérience utilisateur)
    document.getElementById("texte").style.fontSize = `${taille}px`; // Mise à jour du style
}

// Affichage du code source pour l'ajustement de taille
function afficherCodeTaille() {
    const code = `
// Ajustement de la taille du texte
let taille = 16; // Valeur de base (ne pas modifier directement ici, changez dans la logique si besoin)

function augmenterTaille() {
    taille += 2; // Augmentation de 2px
    document.getElementById("texte").style.fontSize = \`\${taille}px\`;
}

function reduireTaille() {
    taille -= 2; // Réduction de 2px
    document.getElementById("texte").style.fontSize = \`\${taille}px\`;
}`;
    document.getElementById("code2").innerText = code; // Le code apparaît dans la page
}

// Compteur
let count = 0; // Valeur initiale du compteur (ne pas modifier sans réinitialiser l'affichage)

function incrementer() {
    count++; // Incrémente de 1 (ne pas utiliser des valeurs négatives ici)
    document.getElementById("compteur").innerText = count; // Mise à jour de l'affichage
}

// Affichage du code source pour le compteur
function afficherCodeAutre() {
    const code = `
// Compteur
let count = 0; // Initialisation correcte (restez sur un entier positif)

function incrementer() {
    count++;
    document.getElementById("compteur").innerText = count;
}`;
    document.getElementById("code3").innerText = code; // Le code apparaît dans la page
}

// Salutations selon l'heure
function saluerSelonHeure() {
    let heure = prompt("Entrez l'heure (0-23):"); // Saisie de l'heure (vérifiez que l'utilisateur respecte le format)
    if (heure >= 6 && heure < 12) {
        alert("Bonjour"); // Matinée
    } else if (heure >= 12 && heure < 18) {
        alert("Bon après-midi"); // Après-midi
    } else {
        alert("Bonsoir"); // Soirée
    }
}

// Affichage du code source pour les salutations
function afficherCodesaluer() {
    const code = `
// Salutations selon l'heure
function saluerSelonHeure() {
    let heure = prompt("Entrez l'heure (0-23):"); // Toujours utiliser des heures de 0 à 23
    if (heure >= 6 && heure < 12) {
        alert("Bonjour");
    } else if (heure >= 12 && heure < 18) {
        alert("Bon après-midi");
    } else {
        alert("Bonsoir");
    }
}`;
    document.getElementById("code4").innerText = code; // Le code apparaît dans la page
}

// Affichage de l'heure actuelle
function afficheHeure() {
    let heure = new Date(); // Récupère l'heure actuelle (ne pas changer l'objet utilisé)
    let heures = heure.getHours().toString().padStart(2, '0'); // Formate les heures (toujours sur deux chiffres)
    let minutes = heure.getMinutes().toString().padStart(2, '0'); // Formate les minutes
    let secondes = heure.getSeconds().toString().padStart(2, '0'); // Formate les secondes
    alert(`Heure actuelle : ${heures}:${minutes}:${secondes}`); // Affiche l'heure
}

// Affichage du code source pour l'heure actuelle
function afficherHeure2() {
    const code = `
// Affichage de l'heure actuelle
function afficheHeure() {
    let heure = new Date(); // Garder ce format pour les nouvelles heures
    let heures = heure.getHours().toString().padStart(2, '0');
    let minutes = heure.getMinutes().toString().padStart(2, '0');
    let secondes = heure.getSeconds().toString().padStart(2, '0');
    alert(\`Heure actuelle : \${heures}:\${minutes}:\${secondes}\`);
}`;
    document.getElementById("code5").innerText = code; // Le code apparaît dans la page
}

// Conversion USD en EUR
function convertirDevises() {
    let montant = prompt("Entrez le montant en dollars:"); // Saisie du montant en USD
    let taux = 0.85; // Taux de conversion actuel (changer uniquement si le taux varie)
    let conversion = montant * taux; // Conversion en EUR
    alert(`${montant} USD = ${conversion.toFixed(2)} EUR`); // Résultat
}

// Affichage du code source pour la conversion de devises
function afficherDevises() {
    const code = `
// Conversion USD en EUR
function convertirDevises() {
    let montant = prompt("Entrez le montant en dollars:");
    let taux = 0.85; // Attention : mettre à jour ce taux régulièrement
    let conversion = montant * taux;
    alert(\`\${montant} USD = \${conversion.toFixed(2)} EUR\`);
}`;
    document.getElementById("code6").innerText = code; // Le code apparaît dans la page
}

// Détection de voyelles dans une phrase
function compterVoyelles() {
    let phrase = prompt("Entrez une phrase:"); // Saisie de la phrase
    let voyelles = ['a', 'e', 'i', 'o', 'u']; // Ne pas modifier les voyelles, elles sont complètes
    let compteur = 0; // Initialisation du compteur
    for (let i = 0; i < phrase.length; i++) {
        if (voyelles.includes(phrase[i].toLowerCase())) {
            compteur++; // Incrémentation pour chaque voyelle
        }
    }
    alert(`Il y a ${compteur} voyelles dans la phrase.`); // Résultat
}

// Affichage du code source pour les voyelles
function afficherVoyelles() {
    const code = `
// Détection de voyelles dans une phrase
function compterVoyelles() {
    let phrase = prompt("Entrez une phrase:");
    let voyelles = ['a', 'e', 'i', 'o', 'u']; // Ne pas toucher à ce tableau, il est complet
    let compteur = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (voyelles.includes(phrase[i].toLowerCase())) {
            compteur++;
        }
    }
}`;
    document.getElementById("code8").innerText = code; // Le code apparaît dans la page
}



 // Fonction pour vérifier si un nombre est premier
function estPremier(n) {
    // Si n est inférieur ou égal à 1, ce n'est pas un nombre premier
    if (n <= 1) return false;

    // On vérifie si n est divisible par un nombre entre 2 et la racine carrée de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // Si n est divisible par i, n n'est pas premier
    }
    return true; // Si aucun diviseur n'est trouvé, n est premier
}

// Fonction pour vérifier si un nombre entré est premier
function verifierPremier() {
    let n = parseInt(document.getElementById('inputValue').value); // Récupère la valeur entrée par l'utilisateur
    // Vérifie si la valeur entrée est un nombre valide
    if (isNaN(n)) {
        document.getElementById("message").innerText = "Veuillez entrer un nombre valide."; // Affiche un message d'erreur
        return;
    }

    // Affiche un message indiquant si le nombre est premier ou non
    if (estPremier(n)) {
        document.getElementById("message").innerText = "Le nombre " + n + " est un nombre premier."; // Affiche que c'est un nombre premier
    } else {
        document.getElementById("message").innerText = "Le nombre " + n + " n'est pas un nombre premier."; // Affiche que ce n'est pas un nombre premier
    }
}

// Fonction pour réinitialiser l'input et le message
function resetInput() {
    document.getElementById('inputValue').value = ''; // Réinitialise la valeur de l'input
    document.getElementById("message").innerText = ''; // Efface le message affiché
}

// Fonction pour afficher le code source dans la page
function afficherPremier() {
    const code = `
    // Fonction pour vérifier si un nombre est premier
    function estPremier(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // Fonction pour vérifier si le nombre entré est premier
    function verifierPremier() {
        let n = parseInt(document.getElementById('inputValue').value);
        if (isNaN(n)) {
            document.getElementById("message").innerText = "Veuillez entrer un nombre valide.";
            return;
        }

        if (estPremier(n)) {
            document.getElementById("message").innerText = "Le nombre " + n + " est un nombre premier.";
        } else {
            document.getElementById("message").innerText = "Le nombre " + n + " n'est pas un nombre premier.";
        }
    }

    // Fonction pour réinitialiser l'input et le message
    function resetInput() {
        document.getElementById('inputValue').value = '';
        document.getElementById("message").innerText = '';
    }
    `;
    document.getElementById("code7").innerText = code;
    document.getElementById("codeDisplay").style.display = 'block'; // Affiche la section avec le code
}

// Fonction pour tester la couleur de fond
function test_couleur() {
    let couleur = prompt("Donner une couleur (par exemple : red, blue, etc.)");

    // Essaie de changer la couleur de fond avec la couleur donnée
    if (isColor(couleur)) {
        document.body.style.backgroundColor = couleur; // Applique la couleur au fond de la page
    }
    // Si la couleur n'est pas valide, il ne se passe rien
}

// Fonction pour vérifier si une couleur est valide
function isColor(couleur) {
    const test = document.createElement("div"); // Crée un élément div temporaire pour tester
    test.style.color = couleur; // Applique la couleur
    return test.style.color !== ""; // Vérifie si la couleur a été correctement appliquée
}
// Fonction pour afficher le code de test de couleur
function afficherCouleur() {
    const code = `
function test_couleur() {
let couleur = prompt("Donner une couleur (par exemple : rouge, bleu, vert, etc.)");

if (isColor(couleur)) {
document.body.style.backgroundColor = couleur;
}
}

function isColor(couleur) {
const test = document.createElement("div");
test.style.color = couleur;
return test.style.color !== "";
}
    `;
    document.getElementById("code9").innerText = code;
    document.getElementById("codeDisplay").style.display = 'block'; // Affiche la section avec le code
}

// Fonction pour générer le choix de l'ordinateur dans le jeu Pierre-papier-ciseaux
function choixOrdinateur() {
    const choix = ['pierre', 'feuille', 'ciseaux'];
    const randomIndex = Math.floor(Math.random() * 3); // Choisit un indice aléatoire
    return choix[randomIndex]; // Retourne le choix de l'ordinateur
}

// Fonction pour déterminer le résultat du jeu Pierre-papier-ciseaux
function jouer(choixJoueur) {
    const choixOrdi = choixOrdinateur(); // Récupère le choix de l'ordinateur
    if (choixJoueur === choixOrdi) {
        alert(`Égalité ! L'ordinateur a choisi ${choixOrdi}.`);
    } else if (
        (choixJoueur === 'pierre' && choixOrdi === 'ciseaux') ||
        (choixJoueur === 'feuille' && choixOrdi === 'pierre') ||
        (choixJoueur === 'ciseaux' && choixOrdi === 'feuille')
    ) {
        alert(`Vous avez gagné ! L'ordinateur a choisi ${choixOrdi}.`);
    } else {
        alert(`Vous avez perdu ! L'ordinateur a choisi ${choixOrdi}.`);
    }
}

// Fonction pour afficher le code du jeu Pierre-papier-ciseaux
function afficherpierre() {
    const code = `
    function choixOrdinateur() {
        const choix = ['pierre', 'feuille', 'ciseaux'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choix[randomIndex];
    }

    function jouer(choixJoueur) {
        const choixOrdi = choixOrdinateur();
        if (choixJoueur === choixOrdi) {
            alert(\`Égalité ! L'ordinateur a choisi \${choixOrdi}.\`);
        } else if (
            (choixJoueur === 'pierre' && choixOrdi === 'ciseaux') ||
            (choixJoueur === 'feuille' && choixOrdi === 'pierre') ||
            (choixJoueur === 'ciseaux' && choixOrdi === 'feuille')
        ) {
            alert(\`Vous avez gagné ! L'ordinateur a choisi \${choixOrdi}.\`);
        } else {
            alert(\`Vous avez perdu ! L'ordinateur a choisi \${choixOrdi}.\`);
        }
    }
    `;
    document.getElementById("code10").innerText = code;
}

// Fonction pour deviner un nombre entre 1 et 100
let nombreSecret = Math.floor(Math.random() * 100) + 1;

function devinerNombre() {
    let guess = parseInt(document.getElementById("deviner").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Veuillez entrer un nombre valide entre 1 et 100."); // Si la valeur entrée n'est pas un nombre valide, afficher un message
        return;
    }

    // Vérifie si la tentative est correcte
    if (guess === nombreSecret) {
        alert("Bravo, vous avez deviné le nombre !"); // Si le joueur a trouvé le nombre
    } else if (guess > nombreSecret) {
        alert("Le nombre est plus petit."); // Si le nombre entré est trop grand
    } else {
        alert("Le nombre est plus grand."); // Si le nombre entré est trop petit
    }
}

// Fonction pour afficher le code du jeu de devinette
function afficherNombre() {
    const code = `function devinerNombre() {
    let guess = parseInt(document.getElementById("deviner").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Veuillez entrer un nombre valide entre 1 et 100."); // Si la valeur entrée n'est pas un nombre valide, afficher un message
        return;
    }

    // Vérifie si la tentative est correcte
    if (guess === nombreSecret) {
        alert("Bravo, vous avez deviné le nombre !"); // Si le joueur a trouvé le nombre
    } else if (guess > nombreSecret) {
        alert("Le nombre est plus petit."); // Si le nombre entré est trop grand
    } else {
        alert("Le nombre est plus grand."); // Si le nombre entré est trop petit
    }`;
    document.getElementById("code11").innerText = code;
}
// Fonction pour compter le nombre de fois où le chiffre 6 apparaît après plusieurs lancers de dé
function combienDe6(n) {
    let nbDe6 = 0;
    for (let i = 0; i < n; i++) {
        let a = Math.floor(Math.random() * 6) + 1; // Simule un lancer de dé
        if (a === 6) {
            nbDe6++;
        }
    }
    return nbDe6; // Retourne le nombre de 6 obtenus
}

// Fonction pour obtenir le nombre de 6 obtenus après un certain nombre de lancers
function lancerDe() {
    let nombreDeLancers = parseInt(document.getElementById("nombreDeLancers").value);
    if (isNaN(nombreDeLancers) || nombreDeLancers <= 0) {
        alert("Veuillez entrer un nombre valide."); // Si l'utilisateur n'entre pas un nombre valide
        return;
    }

    const resultat = combienDe6(nombreDeLancers); // Nombre de 6 obtenus
    document.getElementById("resultat").innerText = `Le chiffre 6 est apparu ${resultat} fois.`; // Affiche le résultat
}

// Fonction pour afficher le code des lancers de dé
function afficherDe() {
    const code = `
function combienDe6(n) {
let nbDe6 = 0;
for (let i = 0; i < n; i++) {
let a = Math.floor(Math.random() * 6) + 1;
if (a === 6) {
    nbDe6++;
}
}
return nbDe6;
}

function lancerDe() {
let nombreDeLancers = parseInt(document.getElementById("nombreDeLancers").value);
if (isNaN(nombreDeLancers) || nombreDeLancers <= 0) {
alert("Veuillez entrer un nombre valide.");
return;
}

const resultat = combienDe6(nombreDeLancers);
document.getElementById("resultat").innerText = \`Le chiffre 6 est apparu \${resultat} fois.\`;
}`;
    document.getElementById("code12").textContent = code; // Affiche le code dans le bloc <pre>
}

   // Fonction pour afficher l'heure en fonction de la ville j'ai changer plusieur fois l'exercice 13 car j'avais des probléme avec les autre exercices 
function afficherHeure13() {
    const ville = document.getElementById("ville").value.trim();
    let fuseauHoraire;

    // Dictionnaire pour les principales villes et leurs fuseaux horaires
    const fuseaux = {
        "Paris": "Europe/Paris",
        "New York": "America/New_York",
        "Tokyo": "Asia/Tokyo",
        "Sydney": "Australia/Sydney",
        "Londres": "Europe/London",
        "Los Angeles": "America/Los_Angeles",
        "Moscou": "Europe/Moscow"
    };

    // Vérifier si la ville est dans le dictionnaire
    if (fuseaux[ville]) {
        fuseauHoraire = fuseaux[ville];
        const heureLocale = new Date().toLocaleString("fr-FR", { timeZone: fuseauHoraire });
        document.getElementById("heure").innerText = "L'heure à " + ville + " est : " + heureLocale;
    } else {
        document.getElementById("heure").innerText = "Ville non supportée. Essayez Paris, New York, Tokyo, ou Sydney.";
    }
}

// Fonction pour afficher le code JavaScript utilisé
function showCode13() {
    const code = `
        // Fonction pour afficher l'heure en fonction de la ville
        function afficherHeure() {
            const ville = document.getElementById("ville").value.trim();
            let fuseauHoraire;

            // Dictionnaire pour les principales villes et leurs fuseaux horaires
            const fuseaux = {
                "Paris": "Europe/Paris",
                "New York": "America/New_York",
                "Tokyo": "Asia/Tokyo",
                "Sydney": "Australia/Sydney",
                "Londres": "Europe/London",
                "Los Angeles": "America/Los_Angeles",
                "Moscou": "Europe/Moscow"
            };

            // Vérifier si la ville est dans le dictionnaire
            if (fuseaux[ville]) {
                fuseauHoraire = fuseaux[ville];
                const heureLocale = new Date().toLocaleString("fr-FR", { timeZone: fuseauHoraire });
                document.getElementById("heure").innerText = "L'heure à " + ville + " est : " + heureLocale;
            } else {
                document.getElementById("heure").innerText = "Ville non supportée. Essayez Paris, New York, Tokyo, ou Sydney.";
            }
        }
    `;
    // Afficher le code dans l'élément HTML avec l'ID 'code13'
    document.getElementById('code13').innerText = code;
}


    // Obtenez l'heure pour le fuseau horaire spécifique
    const options = { timeZone: fuseauHoraire, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const date = new Date().toLocaleTimeString([], options);

    // Afficher l'heure
    document.getElementById("heure").innerText = `L'heure à ${ville} est : ${date}`;

// Fonction pour changer la couleur du texte
function changerCouleur() {
    // Récupère la couleur entrée par l'utilisateur
    var couleur = document.getElementById("couleurInput").value;
    
    // Vérifie si la couleur est valide
    var paragraphe = document.getElementById("texte2");
    paragraphe.style.color = couleur; // Applique la couleur au texte
}
  
 // Fonction pour afficher le code JavaScript utilisé pour changer la couleur
 function showCode14() {
    const code = `
// Fonction pour changer la couleur de fond du corps
function changeColor() {
let color = document.getElementById('colorPicker').value;
document.body.style.backgroundColor = color;
}
`;
    document.getElementById("code14").innerText = code;
    document.getElementById("codeDisplay").style.display = 'block';
}
// Fonction pour générer un mot de passe aléatoire
function genererMotDePasse() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let longueur = parseInt(prompt("Entrez la longueur du mot de passe :"));

    // Vérification de la longueur
    if (isNaN(longueur) || longueur < 6) {
        alert("Veuillez entrer une longueur valide (minimum 6 caractères) !");
        return;
    }

    let motDePasse = "";

    // Générer le mot de passe
    for (let i = 0; i < longueur; i++) {
        let randomIndex = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[randomIndex];
    }

    // Afficher le mot de passe généré dans un élément HTML
    document.getElementById("resultat3").innerText = "Votre mot de passe généré est : " + motDePasse;
}
function showCode15() {
    const code = `
        // Fonction pour afficher un mot de passe
        function togglePassword() {
            var passwordField = document.getElementById("password");
            var toggleBtn = document.getElementById("toggleBtn");

            // Si le type du champ est "password", on le change en "text" pour afficher
            if (passwordField.type === "password") {
                passwordField.type = "text";
                toggleBtn.innerText = "Cacher le mot de passe";
            } else {
                // Sinon on le remet en "password" pour cacher
                passwordField.type = "password";
                toggleBtn.innerText = "Afficher le mot de passe";
            }
        }
    `;
    // Affiche le code dans un élément HTML avec l'ID 'code15'
    document.getElementById('code15').innerText = code;
}
 // Fonction pour générer un pseudo aléatoire
 function generatePseudo() {
    // Listes d'adjectifs, noms et chiffres
    const adjectives = ["Rapide", "Brillant", "Mystique", "Étrange", "Vaillant", "Fougueux"];
    const nouns = ["Guerrier", "Mage", "Sorcier", "Chevalier", "Dragon", "Renard"]
    const number = Math.floor(Math.random() * 1000); // Nombre entre 0 et 999

    // Sélection d'un élément aléatoire dans chaque liste
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    // Génération du pseudo
    const pseudo = `${adjective}${noun}${number}`;

    // Affichage du pseudo
    document.getElementById("pseudo").textContent = pseudo;
}

// Ajout d'un écouteur d'événement au bouton
document.getElementById("generateButton").addEventListener("click", generatePseudo);
function showCode16() {
    const code = `
        // Fonction pour générer un pseudo aléatoire
        function generatePseudo() {
            // Listes d'adjectifs, noms et chiffres
            const adjectives = ["Rapide", "Brillant", "Mystique", "Étrange", "Vaillant", "Fougueux"];
            const nouns = ["Guerrier", "Mage", "Sorcier", "Chevalier", "Dragon", "Renard"];
            const number = Math.floor(Math.random() * 1000); // Nombre entre 0 et 999

            // Sélection d'un élément aléatoire dans chaque liste
            const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
            const noun = nouns[Math.floor(Math.random() * nouns.length)];

            // Génération du pseudo
            const pseudo = \`\${adjective}\${noun}\${number}\`;

            // Affichage du pseudo
            document.getElementById("pseudo").textContent = pseudo;
        }

        // Ajout d'un écouteur d'événement au bouton
        document.getElementById("generateButton").addEventListener("click", generatePseudo);
    `;
    // Affiche le code dans un élément HTML avec l'ID 'code16'
    document.getElementById('code16').innerText = code;
}