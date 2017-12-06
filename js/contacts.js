/* 
Activité : gestion des contacts
*/

var Contact = {
    init:function(nom,prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    decire:function(){
        return "Nom :"+this.nom+", prénom :"+this.prenom;
    }
};
function menu()
{
    var description = "1: Lister les contacts\n"+
        "2: Ajouter les contacts\n"+
        "0: Quitter";
    return description;
}
var contact1 =Object.create(Contact);
    contact1.init("Carole","Lévisse");
var contact2 = Object.create(Contact);;
    contact2.init("Mélodie","Nelsonne");
var contacts = [contact1,contact2];
console.log("Bienvenue au gestionnaire de contact :");
console.log(menu());
var option = Number(prompt("Choisissez une option :"));
while(option !== 0)
{
    
     console.log(menu());
    switch(option)
    {
    case 1:    
        console.log("Voici la liste de tout les contacts:");
        contacts.forEach(function(contact){
           console.log(contact.decire()); 
        });
        break;    
    case 2:
        var nom =prompt("Entrez le nom du nouveau contact:");
        var prenom=prompt("Entrez le prénom du contact");
        var contact = Object.create(Contact);
        contact.init(nom, prenom);
        contacts.push(contact);
        console.log("contact ajouté avec succés");    
        
            
        
    }
    option = Number(prompt("Choisissez une option :"));
  
}
 if(option === 0)
       {
           console.log("Au revoir!");
       }

 