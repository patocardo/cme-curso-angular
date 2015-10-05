      angular.module("pcApp", ["ngRoute"])
        .value("characters", [{
          name: 'Jon Snow',
          family: 'Stark'
        }, {
          name: 'Sansa Stark',
          family: 'Stark'
        }, {
          name: 'Tyrion Lannister',
          family: 'Lannister'
        }])
        .constant("VIEWS", {
          view01: "view/view01.html",
          view02: "view/view02.html"
        })
        .config(["$routeProvider", "VIEWS", function($routeProvider, VIEWS) {
          $routeProvider.when("/", {
            controller: "ListController",
            templateUrl: VIEWS.view01
          }).when("/detail/:name", {
            controller: "DetailController",
            templateUrl: VIEWS.view02
          }).otherwise({
            redirectTo: "/"
          });
        }])
        .controller("ListController", ["$scope", "characters",
          function($scope, characters) {
            $scope.characters = characters;
          }
        ])
        .controller("DetailController", ["$scope", "$routeParams", "characters",
          function($scope, $routeParams, characters) {
            angular.forEach(characters, function(item, index) {
              if (item.name == $routeParams.name) {
                $scope.character = item;
              }
            });
          }
        ]);
 /*
   pcApp.controller("WelcomeController", ["$scope", "personajes",
  		function ($scope, personajes) {
  			$scope.personajes = personajes;
  		}
  	]);
  pcApp.controller("ListController", 
  			$scope.characters = personajes;
			$scope.back = function(){
				$location.path("/h"); // no funca,  debe redireccionar a la página de inicio, que hay que hacerla
			}
			$scope.remove = function(id){
				if(window.confirm("¿Con seguridad desea remover a "+personajes[id].name+"?")){
					delete personajes[id];
				}
			}
  		}
  );
*/
/*
  pcApp.controller("DetailController", ["$scope", "$routeParams", "personajes",
  		function ($scope, $routeParams, personajes) {
  			$scope.personaje = personajes[$routeParams.id];
  		}
  	]);

  pcApp.controller("EditController", ["$scope", "$routeParams", "personajes",
  		function ($scope, $routeParams, personajes) {
			if($routeParams.id != '0'){
				$scope.personaje = personajes[$routeParams.id];		
			}else{
				id = 1;
				for(idpers in personajes){
					id = (parseInt(idpers) > id) ? idpers : id;
				}
				id = new String(parseInt(id) + 1);
				personajes[id] = {name:"", family:"", season:"", chapter:"", description:"", photo:""};
				$scope.personaje = personajes[id];
 			}
  		}
  	]);
	*/