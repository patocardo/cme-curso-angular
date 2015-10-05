/*
la declaración de módulos, sus config y sus run, debieran estar en la raíz de app
separándola de los controladores, vistas, servicios, etc.
  	}).when("/detail/:id", {
  		controller : "DetailController",
  		templateUrl : "ejemplo_vista/detalle01.html"
  	}).when("/edit/:id", {
  		controller : "EditController",
  		templateUrl : "ejemplo_vista/formulario01.html"
  	}).when("/h", {
  		controller : "WelcomeController",
  		templateUrl : "ejemplo_vista/hola01.html"
var pcApp = angular.module("pcApp", ["ngRoute"]);

  pcApp.config(function ($routeProvider) {
  	$routeProvider.when("/", {
  		controller : "ListController",
  		templateUrl : "ejemplo_vista/lista01.html"
 	}).otherwise({
  		redirectTo : "/"
  	});
  });
 */
  
  //pcApp.constant("WIKIURL", "http://es.wikipedia.org");
     pcApp = angular.module("pcApp", ["ngRoute"]);
	 
	 pcApp.value("characters", { "1":{
          name: 'Jon Snow',
          family: 'Stark',
		  season: '3',
		  chapter: '6',
        }, 
		"2":{
          name: 'Sansa Stark',
          family: 'Stark',
		  season: '2',
		  chapter: '9'
        }, 
		"3":{
          name: 'Tyrion Lannister',
          family: 'Lannister',
		  season: '4',
		  chapter: '9'
		}
	 });
		
     pcApp.constant("VIEWS", {
			viewLista: "ejemplo_vista/lista01.html",
			viewDetalle: "ejemplo_vista/detalle01.html",
			viewEditar: "ejemplo_vista/formulario01.html"
        });

pcApp.config(["$routeProvider", "VIEWS", function($routeProvider, VIEWS) {
          $routeProvider.when("/", {
            controller: "ListController",
            templateUrl: VIEWS.viewLista
          }).when("/detail/:id", {
            controller: "DetailController",
            templateUrl: VIEWS.viewDetalle
          }).when("/edit/:id", {
            controller: "EditController",
            templateUrl: VIEWS.viewEditar
          }).otherwise({
            redirectTo: "/"
          });
        }]);
				
     