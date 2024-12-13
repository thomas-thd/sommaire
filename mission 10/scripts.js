// Thomas Thédié 
document.addEventListener("DOMContentLoaded", function () { 
    // Attend que le DOM soit complètement chargé avant d'exécuter le script.
    const elements = { // Références aux principaux éléments de l'interface utilisateur pour faciliter la manipulation DOM dans le script
        // j'ai besoins de faire ça pour les pdf je n'ais vu personne reussir as génerer un pdf sans
        ajouterLigne: document.getElementById("ajouterLigne"),
        remplirAuto: document.getElementById("remplirAuto"),
        calculer: document.getElementById("calculer"),
        annuler: document.getElementById("annuler"),
        exportPdf: document.getElementById("exportPdf"),
        sousTotal: document.getElementById("sousTotal"),
        sousTotalMoinsRemises: document.getElementById("sousTotalMoinsRemises"),
        totalGeneral: document.getElementById("totalGeneral"),
        calculeTaxe: document.getElementById("calculeTaxe"),
        remise: document.getElementById("remise"),
        taxe: document.getElementById("taxe"),
        frais: document.getElementById("frais"),
        tableau: document.getElementById("facture").querySelector("tbody"),
        ligneModele: document.querySelector(".ligne")
    };
    // Fonction pour ajouter une nouvelle ligne à la facture  
function ajouterNouvelleLigne() {
    const nouvelleLigne = elements.ligneModele.cloneNode(true);
    nouvelleLigne.querySelectorAll("input").forEach(input => (input.value = ""));
    nouvelleLigne.querySelector(".total").textContent = "0";

    const qteInput = nouvelleLigne.querySelector(".qte");
    const prixInput = nouvelleLigne.querySelector(".prix");

    const recalculerTotalLigne = () => {
        const total = (parseInt(qteInput.value) || 0) * (parseFloat(prixInput.value) || 0);
        nouvelleLigne.querySelector(".total").textContent = total.toFixed(2);
        calculerFacture();
    };

    qteInput.addEventListener("input", recalculerTotalLigne);
    prixInput.addEventListener("input", recalculerTotalLigne);

    elements.tableau.appendChild(nouvelleLigne);
}

// Fonction pour remplir automatiquement avec des valeurs aléatoires  
function remplirAutomatiquement() {
    const descriptions = ["Produit A", "Produit B", "Produit C", "Produit D"];
    document.querySelectorAll(".ligne").forEach(ligne => {
        ligne.querySelector(".desc").value = descriptions[Math.floor(Math.random() * descriptions.length)];
        ligne.querySelector(".qte").value = Math.floor(Math.random() * 10) + 1;
        ligne.querySelector(".prix").value = (Math.random() * 100).toFixed(2);
        ligne.querySelector(".total").textContent = (parseInt(ligne.querySelector(".qte").value) || 0) *
          (parseFloat(ligne.querySelector(".prix").value) || 0).toFixed(2);
        calculerFacture();
    });
}
// Fonction pour calculer les totaux de la facture  
function calculerFacture() {
    let sousTotal = 0;

    document.querySelectorAll(".ligne").forEach(ligne => {
        sousTotal += parseFloat(ligne.querySelector(".total").textContent) || 0;
    });

    const remise = parseFloat(elements.remise.value) || 0;
    const taxe = parseFloat(elements.taxe.value) || 0;
    const frais = parseFloat(elements.frais.value) || 0;

    const sousTotalMoinsRemises = sousTotal - (sousTotal * remise / 100);
    const taxeTotale = sousTotalMoinsRemises * (taxe / 100);
    const totalGeneral = sousTotalMoinsRemises + taxeTotale + frais;

    elements.sousTotal.textContent = sousTotal.toFixed(2);
    elements.sousTotalMoinsRemises.textContent = sousTotalMoinsRemises.toFixed(2);
    elements.calculeTaxe.textContent = taxeTotale.toFixed(2);
    elements.totalGeneral.textContent = totalGeneral.toFixed(2);
}


    // Fonction pour exporter la facture en PDF
    function exporterEnPDF() {
        const { jsPDF } = window.jspdf; // Utilise la bibliothèque jsPDF
        const doc = new jsPDF(); // Crée un nouvel objet PDF

        doc.setFontSize(12);
        doc.text("FACTURE", 85, 20);
        doc.setFontSize(10);
        doc.text("Nom de l'entreprise", 10, 30);
        doc.text("Adresse : 123 Rue Exemple, 75000 Paris", 10, 36);
        doc.text("Téléphone : +33 1 23 45 67 89", 10, 42);
        doc.text("Email : contact@nomdelacompagnie.com", 10, 48);
        let y = 70;
        document.querySelectorAll(".ligne").forEach(ligne => {
            const description = ligne.querySelector(".desc").value || "";
            const qte = ligne.querySelector(".qte").value || "0";
            const prix = ligne.querySelector(".prix").value || "0";
            const total = ligne.querySelector(".total").textContent || "0";
            doc.text(description, 10, y);
            doc.text(qte, 100, y);
            doc.text(prix, 130, y);
            doc.text(total, 180, y);
            y += 8; 
        });
        doc.save("facture.pdf");
    }
    // Attache les événements aux boutons
    elements.ajouterLigne.addEventListener("click", ajouterNouvelleLigne);
    elements.remplirAuto.addEventListener("click", remplirAutomatiquement);
    elements.calculer.addEventListener("click", calculerFacture);
    elements.annuler.addEventListener("click", () => {
        elements.tableau.innerHTML = "";
        calculerFacture();
    });
    elements.exportPdf.addEventListener("click", exporterEnPDF);
});
