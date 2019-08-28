
 var dwarves = ['Doc', 'Dopey', 'Bashful', 'Grumpy']
 
 function dwarfRollCall(dwarves){
   var listDwarves = []
   
   for (var i=0;i< dwarves.length / 2;i++){
     listDwarves.push(`${i+1}. ${dwarves[i]} `)
   }
   return listDwarves.join("")
 }
 
function summonCaptainPlanet(planeteerCalls){
  var upperCaseCall = [];
  
  for (var i=0; i<planeteerCalls.length;i++){
    var xpoint = "!"
    upperCaseCall.push(`${planeteerCalls[i]}${xpoint}`.toUpperCase())
  }
  return upperCaseCall
}

function longPlaneteerCalls(arrOfCalls) {
  for(let i = 0; i < arrOfCalls.length; i++){
   
    if(arrOfCalls[i].length>4){
      return true
  }
}
  return false
}

function findTheCheese (anyFood) {

  for (var i = 0; i < anyFood.length; i++) {
  
    if (anyFood[i]===  'gouda'|| anyFood[i]===  'cheddar' || anyFood[i]==='camembert' || anyFood[i] === 'swiss') {
      return anyFood[i];
    }
  }
  return 'no cheese!'
}

function wordsWithB(words){
  var array = []
  for (var i = 0; i < words.length; i++) {
    if(words[i].startsWith("b")){
      array.push(words[i]);
    }
  }
}
