


const weekDays = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

let adj = new Date();
let options = {weekday: 'long'};
let currentDay = adj.toLocaleDateString('fr-FR',options);

currentDay = capitalize(currentDay);



 let daysInOrder = weekDays.slice(weekDays.indexOf(currentDay)).concat(weekDays.slice(0,weekDays.indexOf(currentDay)));




// capitalize first letter
 function capitalize(thestring){
    
    return thestring[0].toUpperCase()+thestring.slice(1);
}

export {daysInOrder,capitalize};


