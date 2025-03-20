// === Ajout des fonctionnalités pour vérifier les mots de passe compromis ===
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé !");

    // === Effet Matrix existant ===
    const matrixContainer = document.createElement('div');
    matrixContainer.classList.add('matrix');
    document.body.appendChild(matrixContainer);

    function createMatrixEffect() {
        for (let i = 0; i < 100; i++) {
            let span = document.createElement('span');
            span.textContent = Math.random() > 0.5 ? "0" : "1"; // Texte binaire
            span.style.position = "absolute";
            span.style.top = "-10px";
            span.style.left = `${Math.random() * 100}vw`;
            span.style.color = "#00ff00";
            span.style.fontSize = `${Math.random() * 10 + 10}px`; // Taille aléatoire
            span.style.opacity = "1";
            span.style.animation = `matrixFall ${Math.random() * 3 + 2}s linear infinite`;
            matrixContainer.appendChild(span);
        }
    }

    createMatrixEffect();

    // === Créer une section pour les outils interactifs ===
    const toolsSection = document.createElement('div');
    toolsSection.classList.add('tools-section');
    document.body.appendChild(toolsSection);

    // === Création du formulaire de vérification de mot de passe ===
    const passwordChecker = document.createElement('div');
    passwordChecker.classList.add('tool-container');
    passwordChecker.innerHTML = `
        <h2>Vérification de Mot de Passe</h2>
        <p>Vérifiez si votre mot de passe a été compromis dans une fuite de données</p>
        <div class="input-group">
            <input type="password" id="password-input" placeholder="Entrez votre mot de passe">
            <button id="check-password">Vérifier</button>
        </div>
        <div id="password-result" class="result-container"></div>
        <p class="info-text">Note: Votre mot de passe est haché localement et seuls les 5 premiers caractères du hash sont envoyés au service (méthode k-anonymity).</p>
    `;
    toolsSection.appendChild(passwordChecker);

    // === Création outil de recherche d'email ===
    const emailFinder = document.createElement('div');
    emailFinder.classList.add('tool-container');
    emailFinder.innerHTML = `
        <h2>Recherche d'Email</h2>
        <p>Vérifiez si un email apparaît dans des fuites de données</p>
        <div class="input-group">
            <input type="email" id="email-input" placeholder="Entrez un email">
            <button id="check-email">Vérifier</button>
        </div>
        <div id="email-result" class="result-container"></div>
    `;
    toolsSection.appendChild(emailFinder);

    // === Création outil de recherche de nom d'utilisateur ===
    const usernameFinder = document.createElement('div');
    usernameFinder.classList.add('tool-container');
    usernameFinder.innerHTML = `
        <h2>Recherche de Nom d'Utilisateur</h2>
        <p>Vérifiez l'existence d'un nom d'utilisateur sur différentes plateformes</p>
        <div class="input-group">
            <input type="text" id="username-input" placeholder="Entrez un nom d'utilisateur">
            <button id="check-username">Vérifier</button>
        </div>
        <div id="username-result" class="result-container"></div>
    `;
    toolsSection.appendChild(usernameFinder);

    // === Fonction pour créer un hash SHA-1 ===
    async function sha1Hash(str) {
        const encoder = new TextEncoder();
        const data = encoder.encode(str);
        const hash = await crypto.subtle.digest('SHA-1', data);
        return Array.from(new Uint8Array(hash))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    }

    // === Gestionnaire d'événement pour la vérification de mot de passe ===
    document.getElementById('check-password').addEventListener('click', async function() {
        const password = document.getElementById('password-input').value;
        const resultContainer = document.getElementById('password-result');
        
        if (!password) {
            resultContainer.innerHTML = '<p class="error">Veuillez entrer un mot de passe</p>';
            return;
        }
        
        resultContainer.innerHTML = '<p class="loading">Vérification en cours...</p>';
        
        try {
            // Création du hash SHA-1
            const hash = await sha1Hash(password);
            const prefix = hash.substring(0, 5);
            const suffix = hash.substring(5);
            
            // Appel à l'API de Have I Been Pwned avec k-anonymity
            const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
            const data = await response.text();
            
            // Vérification si le hash existe dans la réponse
            const hashes = data.split('\n');
            let found = false;
            let occurrences = 0;
            
            for (const h of hashes) {
                const parts = h.split(':');
                if (parts[0].toLowerCase() === suffix.toLowerCase()) {
                    found = true;
                    occurrences = parseInt(parts[1]);
                    break;
                }
            }
            
            if (found) {
                resultContainer.innerHTML = `
                    <p class="danger">Ce mot de passe a été trouvé dans ${occurrences} fuites de données!</p>
                    <p>Recommandation: Changez immédiatement ce mot de passe sur tous les services où vous l'utilisez.</p>
                `;
            } else {
                resultContainer.innerHTML = `
                    <p class="success">Bon choix! Ce mot de passe n'a pas été trouvé dans des fuites connues.</p>
                    <p>N'oubliez pas qu'un bon mot de passe doit être unique et complexe.</p>
                `;
            }
        } catch (error) {
            resultContainer.innerHTML = `<p class="error">Erreur lors de la vérification: ${error.message}</p>`;
        }
    });

    // === Gestionnaire d'événement pour la vérification d'email ===
    document.getElementById('check-email').addEventListener('click', function() {
        const email = document.getElementById('email-input').value;
        const resultContainer = document.getElementById('email-result');
        
        if (!email) {
            resultContainer.innerHTML = '<p class="error">Veuillez entrer un email</p>';
            return;
        }
        
        resultContainer.innerHTML = '<p class="loading">Vérification en cours...</p>';
        
        // Redirection vers Have I Been Pwned avec l'email
        resultContainer.innerHTML = `
            <p>Pour vérifier cet email, vous allez être redirigé vers Have I Been Pwned:</p>
            <a href="https://haveibeenpwned.com/account/${encodeURIComponent(email)}" target="_blank" class="action-button">
                Vérifier sur HIBP
            </a>
        `;
    });

    // === Gestionnaire d'événement pour la vérification de nom d'utilisateur ===
    document.getElementById('check-username').addEventListener('click', function() {
        const username = document.getElementById('username-input').value;
        const resultContainer = document.getElementById('username-result');
        
        if (!username) {
            resultContainer.innerHTML = '<p class="error">Veuillez entrer un nom d\'utilisateur</p>';
            return;
        }
        
        resultContainer.innerHTML = '<p class="loading">Vérification en cours...</p>';
        
        // Liste des services populaires à vérifier
        const services = [
            { name: 'Github', url: `https://github.com/${username}` },
            { name: 'Twitter', url: `https://twitter.com/${username}` },
            { name: 'Instagram', url: `https://instagram.com/${username}` },
            { name: 'Facebook', url: `https://facebook.com/${username}` },
            { name: 'LinkedIn', url: `https://linkedin.com/in/${username}` },
            { name: 'Reddit', url: `https://reddit.com/user/${username}` }
        ];
        
        // Création des liens pour vérifier manuellement
        let linksHTML = '<div class="username-links">';
        services.forEach(service => {
            linksHTML += `
                <a href="${service.url}" target="_blank" class="service-link">
                    <span class="service-name">${service.name}</span>
                </a>
            `;
        });
        linksHTML += '</div>';
        
        resultContainer.innerHTML = `
            <p>Vérifiez ce nom d'utilisateur sur les services suivants:</p>
            ${linksHTML}
            <p>Pour une recherche plus complète:</p>
            <div class="action-buttons">
                <a href="https://namechk.com/namechk-api/?q=${username}" target="_blank" class="action-button">
                    Vérifier sur NameChk
                </a>
                <a href="https://checkusernames.com/userchecker.php?target=${username}" target="_blank" class="action-button">
                    Vérifier sur CheckUsernames
                </a>
            </div>
        `;
    });
});
