(function(root, factory) {
    if (typeof define === 'function' && module.exports) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object' && module.exports) {
        // commonJS
        module.exports = factory();
    } else {
        // Browser globals (Note: root is window)
        root.communicatorModularUMD = factory();
    }
})(this, function() {
    // methods
    function greet(message) {
        return '<h1>' + message + '</h1>';
    }
    var otherFunctions = {
        goodbye: function() {
            return '<h1>Good Bye!</h1>';
        },
    };
    // exposed public methods
    return {
        greet: greet,
        otherFunctions: otherFunctions,
    };
});