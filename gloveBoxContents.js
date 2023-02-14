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
};
gloveBoxContents(contenu);
const gloveBoxContents = contenu['glove box'];
console.log(gloveBoxcontentd);