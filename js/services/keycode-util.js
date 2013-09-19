citc.factory('keycodeUtil',
    function () {
        return {
            isNumeric: function(keycode) {
                return (keycode >= 48 && keycode <= 57)
                    || (keycode >= 96 && keycode <= 105);
            },
            isNavigation: function(keycode) {
                switch(keycode) {
                    case 8: //backspace
                    case 35: //end
                    case 36: //home
                    case 37: //left
                    case 38: //up
                    case 39: //right
                    case 40: //down
                    case 45: //insert
                    case 46: //delete
                        return true;
                    default:
                        return false;
                }
            }
        };
    });