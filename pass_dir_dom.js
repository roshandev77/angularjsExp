var app = angular.module('myApp', []);

app.controller('parentController', ['$scope', function($scope) {
    $scope.pwd = {
        pass: ''
    };
}]);

app.directive('passwordStrength', ['$document', function() {
    return {
        restrict: 'E',
        scope: {
            pass: "=passNgModel"
        },
        template: '<input class="password_input" ng-model="pass"></input><div id="strength" class="strength"></div>',
        link: function(scope, element, attr) {
            var passwordInput = element[0].querySelector(".password_input");
            angular.element(passwordInput).on("keypress", function() {
                var x = passwordInput.value;
                if (x.length > 8) {
                    scope.strength = ' password strength is strong';
                } else if (x.length > 3) {
                    scope.strength = 'password strength is medium';
                } else {
                    scope.strength = 'password strength is weak';
                }

                var strengthDiv = element[0].querySelector(".strength");
                strengthDiv.innerHTML = scope.strength;

                // document.getElementById("strength").innerHTML = scope.strength;
            });

            // passwordInput.addEventListener('keypress', function(event){
            //     // console.log("key press event");

            // });

        }
    }
}])