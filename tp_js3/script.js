function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
    document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
    }




function affichagetab2() {
    var x = prompt("Combien de lignes ?");
    x = parseInt(x); 
    if (isNaN(x) || x <= 0) {
        alert("Veuillez entrer un nombre valide !");
        return;
    }

    document.write("<table border='2' width='30%'>");
    for (let i = 0; i < x; i++) {
        document.write("<tr><td>" + (i + 1) + "</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}
function seconnecter() {
    var login = prompt("Donnez votre nom d'utilisateur");
    var password = prompt("Entrez votre mot de passe");

    if (login === "admin" && password === "admin") {
        document.write("Bienvenue : " + login);
    } else {
        alert("Accès refusé");
    }
}

function seconnecter3() {
    let i = 0;
    do {
        let login = prompt("Donnez votre nom d'utilisateur");
        let password = prompt("Entrez votre mot de passe");

        if (login === "admin" && password === "admin") {
            document.write("Bienvenue : " + login);
            break; // Sort de la boucle après une connexion réussie
        } else {
            alert("Accès refusé");
            i++;
        }
    } while (i < 3);

    if (i === 3) {
        alert("Délai dépassé");
    }
}
function cdc() {
    var chaine = prompt("Donner un mot");
    
    if (chaine) { 
        document.write(chaine.toUpperCase() + "<br>");
        document.write(chaine.toLowerCase() + "<br>");
        document.write("La chaîne contient " + chaine.length + " caractères.<br>");
        document.write("La première lettre est " + chaine.substr(0, 1) + "<br>");
    } else {
        document.write("Vous n'avez pas entré de mot !");
    }
}
function seconnecter2() {
    window.location.href = "identification.html";
}
function login() {
    
    var login = document.getElementById("t1").value;
    var password = document.getElementById("t2").value;

    if (login === "admin" && password === "admin") {
        
        window.location.href = "yes.html";
    } else {
        
        window.location.href = "no.html";
    }
}
function bonus() {
    var articles = [];
    var prixTTC = 0;

    while (true) {
        var nom = prompt("Entrez le nom de l'article :");
        var prix = parseFloat(prompt("Entrez le prix de " + nom + " :"));
        var quantite = parseInt(prompt("Entrez la quantité de " + nom + " :"));

        if (isNaN(prix) || isNaN(quantite) || prix <= 0 || quantite <= 0) {
            alert("Valeur invalide, veuillez réessayer.");
            continue;
        }

        var total = prix * quantite;
        prixTTC += total;

        articles.push({ nom: nom, prix: prix, quantite: quantite, total: total });

        var continuer = prompt("Voulez-vous ajouter un autre article ? (oui/non)").toLowerCase();
        if (continuer !== "oui") break;
    }

    articles.forEach(function (article) {
        document.write("<p>Article : " + article.nom + "</p>");
        document.write("<p>Prix : " + article.prix + "€</p>");
        document.write("<p>Quantité : " + article.quantite + "</p>");
        document.write("<p>Total : " + article.total + "€</p><hr>");
    });

    document.write("<h2>Prix TTC : " + prixTTC + "€</h2>");
}