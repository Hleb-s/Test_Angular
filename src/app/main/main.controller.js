angular
    .module('testAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr) {        
    $scope.someHTML = "<p>Fill out the form you need</p>";  
    
    $scope.someArray = [
        {name: 'Form - ', value: "View 1", isDoc: 0, titleForm:"", textForm:""},
        {name: 'Form - ', value: "View 2", isDoc: 1, titleForm:"Statement", textForm:"Please fire me on their own. Regards,"},
        {name: 'Form - ', value: "View 3", isDoc: 0, titleForm:"", textForm:""},
        ];
    
    $scope.SelectDoc = function(item) {
        $scope.formTitle = item.titleForm;
        $scope.formText = item.textForm;
    };
  
  }
