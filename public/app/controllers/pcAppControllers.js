
     pcApp.controller("ListController", ["$scope", "characters",
          function($scope, characters) {
            $scope.characters = characters;
 			$scope.remover = function(id){
				if(window.confirm("¿Con seguridad desea remover a "+personajes[id].name+"?")){
					delete personajes[id];
				}
			}
         }
        ]);
		
     pcApp.controller("DetailController", ["$scope", "$routeParams", "characters",
          function($scope, $routeParams, characters) {
                $scope.personaje = characters[$routeParams.id];
           }
        ]);
	pcApp.controller("EditController", ["$scope", "$routeParams", "characters",
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