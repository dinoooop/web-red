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

app.service("StoryService", function (WebService) {


    this.getItems = function () {
        return WebService.request({
            method: 'GET',
            url: appConst.apiBaseUrl + '/story',
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

app.filter('htmlFormat', function($sce) {

    //

    return function(x) {
        return $sce.trustAsHtml(x);
    };

});