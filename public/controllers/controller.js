var app = angular.module("myApp",[]);
app.controller("AppCtrl",function AppCtrl($scope,$http){

    var refresh = function() {
        $http.get('/contactlist').then(function (response) {
            console.log("i got the data");
            $scope.contactList = response.data;
        });
    };
    refresh();
    $scope.addContact = function(){
      $http.post('/contactlist',$scope.contact).then(function(response){
          console.log(response.data);
          refresh();
      });
    };
    $scope.remove = function(id){
        $http.delete('/contactlist/' + id).then(function(response){
            refresh();
        });
    };
    $scope.edit = function(id){
        $http.get('/contactlist/' + id).then(function(response){
            $scope.contact = response.data;
            refresh();
        });
    };
    $scope.update = function(){
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response){
            refresh();
        });
    };
    $scope.clear = function(){
        $scope.contact = {};
    };
});