

//Création des éléves
var eleve1 = {
  nom: "Antoine",
  notes: [20, 15, 20]
};

var eleve2 = {
  nom: "Jean",
  notes: [12, 2, 8]
};


var notesEleves = [eleve1, eleve2];

var moyenneEleve = function(eleve){
  var somme = 0;
  //var somme = eleve.notes[0]+eleve.notes[1]+eleve.notes[2];

  for (var i in eleve.notes) {
    var note = parseInt(eleve.notes[i]);
    somme += note;
  }

  var moyenne = somme / eleve.notes.length;
  return moyenne;

};



//Quand le document est chargé
$(document).ready(function(){
  //console.log("Remplissage du tableau");
  $(".eleve1 > .nom").text(eleve1.nom);
  $(".eleve1 > .note-français").text(eleve1.notes[0]);
  $(".eleve1 > .note-maths").text(eleve1.notes[1]);
  $(".eleve1 > .note-géo").text(eleve1.notes[2]);
  $(".eleve1 > .moyenne").text(moyenneEleve(eleve1));

  $(".eleve2 > .nom").text(eleve2.nom);
  $(".eleve2 > .note-français").text(eleve2.notes[0]);
  $(".eleve2 > .note-maths").text(eleve2.notes[1]);
  $(".eleve2 > .note-géo").text(eleve2.notes[2]);
  $(".eleve2 > .moyenne").text(moyenneEleve(eleve2));

  //notesEleves[0].notes[0];
});
