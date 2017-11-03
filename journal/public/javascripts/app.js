var app = window.angular.module('app', [])

app.factory('journalFetcher', journalFetcher)
app.controller('mainCtrl', mainCtrl)

function journalFetcher ($http) {

  var API_ROOT = 'journal'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, journalFetcher, $http) {

  $scope.journal = []

  journalFetcher.get()
    .then(function (data) {
      $scope.journal = data
    })

  $scope.addEntry = function() {
    var formData = {date:$scope.date,entry:$scope.entry};
    console.log(formData);
    var entryURL = '';
    $http({
       url: entryURL,
       method: "POST",
       data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  }
}
