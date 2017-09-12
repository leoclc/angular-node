angular.module('directives', [])
    .directive('myPanel', function() {
    var ddo = {};
    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
   		titulo: '@'
    };

    ddo.templateUrl = 'js/directives/my-panel.html';

    return ddo;
});