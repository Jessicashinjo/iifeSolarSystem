
var solarSystem = (function() {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Planet Nine"];
  var landed = ["Mercury", "Venus", "Mars", "Jupiter"];

  var inOrbit = ["Juno", "Hayabusa 2", "Trace Gas Orbiter"];

  return {
    modified_date: new Date(),
    getPlanets: function(){
      return planets;
    },
    getLanded: function(){
      return landed;
    },
    setLanded: function(newLanded){
      landed = newLanded;
    },
    getInOrbit: function(){
      return inOrbit;
    },
    setInOrbit: function(newInOrbit){
      inOrbit = newInOrbit;
    }
  };

})();

console.log(solarSystem);
