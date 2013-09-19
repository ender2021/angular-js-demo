citc.directive('youtube',
    function () {
	    return {
		    restrict: 'E',
		    transclude: false,
		    scope: { videoId: '=', start: '=', end: '=' },
		    templateUrl: 'templates/directives/youtube.htm',
		    controller: 'YouTubeCompCtrl',
		    replace: true
	    };
    });