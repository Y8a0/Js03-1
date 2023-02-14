// Accédez à l'objet myStorage et affectez le contenu de la propriété glove box à la variable gloveBoxContents. Utilisez la notation par points pour toutes les propriétés lorsque cela est possible, sinon utilisez la notation par crochets. Tout ceci dans une fonction gloveBoxContents(). 
const myStorage = {   
  car: {       
    inside: {         
      'glove box': 'maps',       
      'passenger seat': 'crumbs',   
      },         
      outside: {             
        trunk: 'jack',        
        },     
    
  }, 
  
};  

function gloveBoxContents(){
  contenu = myStorage.car['inside'];
  const gloveBoxContents = contenu['glove box'];
  console.log(gloveBoxContents);
};
gloveBoxContents();
