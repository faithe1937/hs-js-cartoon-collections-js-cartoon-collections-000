 var dwarves = ['Doc', 'Dopey', 'Bashful', 'Grumpy']
 
 function dwarfRollCall(dwarves){
   var listDwarves = []
   
   for (var i=0;i<dwarves.length;i++){
     listDwarves.push(`${i+1}. ${dwarves[i]} `)
   }
   return listDwarves.join("")
 }
 
function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(a=>a.toUpperCase()+"!")
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
   
    if(words[i].length>4){
      return true
  }
}
  return false
}

function findTheCheese (foods) {
  
  for (var i = 0; i < foods.length; i++) {
    
    if (foods[i] ===  'gouda'|| foods[i]===  'cheddar' || foods[i]==='camembert') {
      return foods[i];
    }
  }
  return 'no cheese!'
}
