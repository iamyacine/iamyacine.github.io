
  var listeima;
  function affichage(){
    document.getElementById('initialisation').innerHTML = null;
    listeima = []
    for (let i =0 ; i< 52; i++){
      listeima.push("image.jpg/"+i+".png");
        let img= document.createElement("img")
        img.src = "image.jpg/"+i+".png";
        img.weight = 150;
        img.height = 120;
        document.getElementById('initialisation').appendChild(img)
  
    }
  
  }

  function diviser_carte(listeima) {
    moitie = listeima.length/2;
    liste1 = []
    for (let i = 0; i < moitie; i++) {
      let a = listeima[i]
      let b = listeima[i+moitie] 
      liste1.push(a)
      liste1.push(b)
    } 
    return liste1;
  }
  
  

  function brassage() {
    document.getElementById('initialisation').innerHTML = null;
    liste2 = diviser_carte(listeima); 
    for (let i=0; i < liste2.length ; i++) {
      let img = document.createElement("img");
      img.src = liste2[i];
      img.weight = 150
      img.height = 120
      document.getElementById('initialisation').appendChild(img);       
    }

    listeima = liste2
  } 

  


