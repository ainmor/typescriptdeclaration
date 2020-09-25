// (function(window) {
//     var defaultMessage = 'Hello Communicator';
//     if (typeof window.communicatorGlobal === 'undefined') {
//         // Globally scoped library
//         window.communicatorGlobal = function(message) {
//             if (message == 'undefined') {
//                 message = defaultMessage;
//             }
//             return '<h1>' + message + '</h1>';
//         };
//     }
// })(window);

// (function(window) {
//     function communicatorGlobal() {
//         var _communicatorGlobal = {};
//         _communicatorGlobal.greet = function(message) {
//             return '<h1>' + message + '</h1>';
//         };
//         return _communicatorGlobal;
//     }

//     if (typeof window.communicatorGlobal === 'undefined') {
//         // Globally scoped library
//         window.communicatorGlobal = communicatorGlobal();
//     }
// })(window);

// (function(window) {
//     function communicatorGlobal() {
//         var _communicatorGlobal = {};
//         // adding a sub class
//         _communicatorGlobal.Settings = function(message) {
//             this.message = message;
//         };
//         // New up the class with a default
//         _communicatorGlobal.settings = new _communicatorSettings('default');
//         // this emulates a simple method on a TS class
//         _communicatorGlobal.greet = function() {
//             return '<h1>' + _communicatorGlobal.settings.message + '</h1>';
//         };

//         return _communicatorGlobal;
//     }

//     if (typeof window.communicatorGlobal === 'undefined') {
//         // Globally scoped library
//         window.communicatorGlobal = communicatorGlobal();
//     }
// })(window);