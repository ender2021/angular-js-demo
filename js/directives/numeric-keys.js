citc.directive('numericKeys',
    function (keycodeUtil) {
	    return {
		    restrict: 'A',
		    link: function(scope, element, attrs, controller) {
		        element.on('keydown', function(event) {
		            return keycodeUtil.isNumeric(event.keyCode) || keycodeUtil.isNavigation(event.keyCode);
		        });
		    }
	    };
    });