function test_age(){ 
    let age = prompt("quele est votre age?");
    if(age<18)
    {
        document.write("Attention accès refusé,vous êtes mineur");
    document.body.style.backgroundColor="red"}
    else
    {document.write("ok,vous êtes majeur");
        document.body.style.backgroundColor="green";
    }
}
function affichage(){
    let prenom = prompt("saisir votre prénom ");
    let nom = prompt("saisir votre nom")
    document.write("<div style='border: 5px solid blue;width:400px; height: 300px; margin: auto;font-size:2em;'>");
    document.write("bonjour "+prenom+"  "+nom);
    document.write("</div>")
}
function test_couleur(){
    let couleur= prompt ("donner la couleur")
    if(couleur=="rouge")
        {
        document.body.style.backgroundColor="red"}
    else if(couleur=="bleu")
        {
        document.body.style.backgroundColor="blue"}
        
        else if(couleur=="vert")
            {
        document.body.style.backgroundColor="green"}
    else{
        document.write("couleur non comprise")
    }
        
} 
 function calcul_moyenne(){
    var n1 =prompt("donner la première note:")
    var n2 =prompt("donner la deuxième note :")
    var n3 =prompt("donner la troisieme note:")
    var somme =Number(n1)+Number(n2)+Number(n3)
    var moyenne= somme/3;
    document.write("voici la somme:"+somme + "<br>")
    document.write("voici la moyenne:"+moyenne + "<br>")
    if(moyenne<10)
    {
        document.write("Attention accès refusé,vous êtes pas admis");
    document.body.style.backgroundColor="red"}
    else if(moyenne<14)
        {
            document.write("vous êtes admis passable");
        document.body.style.backgroundColor="green"}

    else

    {document.write("ok,vous êtes admis bien");
        document.body.style.backgroundColor="green";
    }

 }