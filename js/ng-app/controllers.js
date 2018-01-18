app.controller("StoryController", function ($scope, StoryService) {
	console.log("response");
	StoryService.getItems().then(function(response){
		$scope.story = response;
	});
    
});

app.controller("SkillController", function ($scope, SkillService) {
	
	SkillService.getItems().then(function(response){
		$scope.skills = response;
	});
    
});