// Seed.js Notes
var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros');

//can be placed in json
var superheroSeed = [
  {
    name: "Robbie",
    ability: "Not hacking",
    nemesis: "Micheal",
  },
  {
    name: "Charlie",
    ability: "Dom loving",
    nemesis: "Yusef",
  }
  {
    name: "Yusef",
    ability: "Coding really bad",
    nemesis: "JavaScript",
  }
];

function databaseSeed() {

  Superhero.find({} function(err, documets)){
    if(!err && documents.length===0) {
      for (var i = 0; i < superheroSeed.length; i++) {
        var newSuperHero = new Superhero(superheroSeed[i]);
        newSuperhero.save(function(err, success) {
          console.log('database seeded!'
          if (!err) {
             console.log('database seeded!');
          }
      }
    }
    //console.log(documents);
  });

}

module.exports = databaseSeed;

//then in app.js under methodOverride
////var databaseSeed = require('position')
/// databaseSeed();

//in database.js
//create schemea(layer of inforcement) in app.js
//the req.body is the same as
