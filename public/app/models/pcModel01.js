pcApp.factory('personajes',  function(){
		return {'1':{
  					name : 'Jon Snow',
  					family : 'Stark',
					season: '3',
					chapter: '9'
  				}, '2':{
  					name : 'Sansa Stark',
  					family : 'Stark',
					season: '4',
					chapter: '7'
  				}, '3':{
  					name : 'Tyrion Lannister',
  					family : 'Lannister',
					season: '6',
					chapter: '8'
  				}
		};
	}
)

/* a todas las etiquetas de la aplicación se le podrá agregar las etiquetas
  especiales para operar con la etiqueta
*/
pcApp.directive("pcphoto", function(){ 
		return {
			restrict: "E",
			scope: {
				url: "=url"
			},
			template: "<img src='{{url}}' width='80' >",
			replace: true,
			/*
			transclude: false,
			controller: ["$scope", function($scope){}],
			require: false,
			link: function(scope, ...)
			*/
		}
	
	}
)
 /*
 
pcApp.factory('personajes', ['$http', function($http){
  var Url   = "data/personajes.csv";
  var Items = $http.get(Url).then(function(response){
     return csvParser(response.data);
  });
  return Items;
}]);
  
  $http.get('content.json').success(function(data) {
  Lista = data;
  });
  */