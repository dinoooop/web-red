var feed = new Instafeed({
	get: 'user',
	accessToken: '6783545862.d28727f.f07014b4ce4140a4b0ebba777ed01d2c',

	sortBy: 'most-recent',
	limit: 4,
	links: true,
	userId: '6783545862',

});
feed.run();
