
  var app = angular.module('fontSizelar', [])
  app.controller("fontSizeCtrl", MainController);


  var inputNumber = angular.element( document.querySelector( '#input-number' ) );




function MainController($scope){

  //Array to avoid letters on the input field
	$scope.validValues = ['0','1','2','3','4','5','6','7','8','9'];

  //scope
  var scope = this;
  scope.total = 15;
  scope.sizeFont = 1;

  //selector for the buttons
  var increase = angular.element( document.querySelector( '#increase' ) );
  var decrease = angular.element( document.querySelector( '#decrease' ) );


  scope.increase = function(){
    scope.total += parseInt(scope.sizeFont);
    decrease.removeAttr("disabled");
    if (scope.total >= 20){
    	console.log(increase);
    	increase.attr("disabled", "disabled");
    } 

  }
  scope.decrease = function(){
    scope.total -= parseInt(scope.sizeFont);
    increase.removeAttr("disabled");
    if (scope.total <= 10){
    	console.log(decrease);
    	decrease.attr("disabled", "disabled");
    } 
  }
};


//directive that validate the option 
//to avoid letter on the form
app.directive('myValidator', function ($parse) {
    return {
        scope: {
          validValues: '=validValues'
        },
        link: function (scope, elm, attrs) {
          elm.bind('keypress', function(e){
            var char = String.fromCharCode(e.which||e.charCode||e.keyCode), matches = [];
            angular.forEach(scope.validValues, function(value, key){
              if(char === value) matches.push(char);
            }, matches);
            if(matches.length == 0){
              e.preventDefault();
              return false;
            }
          });
        }
    }   
});




