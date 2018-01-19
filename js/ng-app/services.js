app.service("AppService", function () {

    this.getFromArray = function(Obj, key, value){
        var row = {};
    
        angular.forEach(Obj, function (item, index) {
            if (typeof item[key] != 'undefined' && item[key] == value) {
                row = item;
            }
        });

        return row;

    }
});

app.service("WebService", function ($http, $q) {

    this.request = function (req) {

        var deferred = $q.defer();


        $http(req).then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferred.reject(response);
        });

        return deferred.promise;
    }
});

app.service("GeneralService", function (WebService) {

    this.getItems = function () {
        return WebService.request({
            method: 'GET',
            url: appConst.apiBaseUrl + '/general',
        });
    }

    
});

app.service("SkillService", function (WebService) {

    this.getItems = function () {
        return WebService.request({
            method: 'GET',
            url: appConst.apiBaseUrl + '/skills',
        });
    }

    
});

app.service("WorkService", function (WebService) {

    this.getItems = function () {
        return WebService.request({
            method: 'GET',
            url: appConst.apiBaseUrl + '/works',
        });
    }

    
});

app.filter('htmlFormat', function($sce) {

    //

    return function(x) {
        return $sce.trustAsHtml(x);
    };

});