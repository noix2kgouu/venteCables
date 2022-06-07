let compteur = data.length; //récupération de la longueur de data

while(compteur!=0){ //Boucle while pour créer les éléments
    let articleproduit = document.createElement('article');
    articleproduit.className = "produits";
    
    let pageproduits = document.querySelector("#pageproduits");
    let pageproduitspagi = pageproduits.firstChild;
    pageproduits.insertBefore(articleproduit, pageproduitspagi)

    let divimg = document.createElement('div');
    divimg.className = "imgproduit";
    articleproduit.appendChild(divimg);
    divimg.style.height="50%";
    divimg.style.width="100%";

    //insertion de l'image
    let imgproduit = document.createElement('img');
    imgproduit.src = data[compteur-1].picture;
    divimg.appendChild(imgproduit);
    imgproduit.style.height="100%";

    let divinfos = document.createElement('div');
    divinfos.className = "infos";
    articleproduit.appendChild(divinfos);

    //insertion du nom de l'article
    let ptitre = document.createElement('p');
    ptitre.className = "name strong";
    ptitre.textContent = data[compteur-1].name;
    divinfos.appendChild(ptitre);

    //insertion de la description de l'article
    let pcarac = document.createElement('p');
    pcarac.className = "caracproduits";
    pcarac.textContent = data[compteur-1].description;
    divinfos.appendChild(pcarac);

    //insertion du prix de l'article
    let pprix = document.createElement('p');
    pprix.className = "price strong";
    pprix.textContent = data[compteur-1].price;
    divinfos.appendChild(pprix);
    
    //ajout du bouton pour ajouter au panier
    let bouttonpanier = document.createElement('button');
    bouttonpanier.className = "addpanier";
    articleproduit.appendChild(bouttonpanier);
    bouttonpanier.textContent = "Ajouter au panier";

    compteur -= 1;
}