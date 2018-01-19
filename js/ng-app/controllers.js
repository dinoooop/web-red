app.controller("PageController", function (
	$scope,
	AppService, 
	GeneralService, 
	SkillService,
	WorkService
	) {
	
	GeneralService.getItems().then(function(response){
		$scope.general = response;
	});
    
	SkillService.getItems().then(function(response){
		$scope.skills = response;
	});
    
    WorkService.getItems().then(function(response){
		$scope.works = response;
	});

	$scope.onClickWork = function(id){
		$scope.popup = AppService.getFromArray($scope.works, 'post_id', id);
	}
});