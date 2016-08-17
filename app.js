var app = angular.module("ngFun", ["ngTable"]);


app.filter('reverse', function() {
  return function(input) {
    input = input || '';
    var out = input.split("").reverse().join("");
    // uppercase only first letter
    out = out.toLowerCase();
    out = out[0].toUpperCase() + out.slice(1);
    return out;
	  };
});

app.controller("PokemonController", function($scope) {
	  $scope.pokemon = [
    {
      Ndex: 25,
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      Ndex: 10,
      name: 'Caterpie',
      type: 'Bug'
    },
    {
      Ndex: 39,
      name: 'Jigglypuff',
      type: 'Fairy'
    },
    {
      Ndex: 94,
       name: 'Gengar',
      type: 'Ghost'
    },
    {
      Ndex: 143,
      name: 'Snorlax',
      type: 'Normal'
    }
  ];

  	$scope.catchPhrase = "gotta catch them all";
	$scope.trainer = {name: 'ash'};	

});

app.controller("ngTable", function(NgTableParams){
	var self = this;
	var data = [{name: "Moroni", age: 50} /*,*/];
	self.tableParams = new NgTableParams({}, { dataset: data});
	
	});