//Understanding closures
//Creating a Hello World function

var createHelloWorld = function() { 
    return function(...args) {

        return "Hello World";   
    }
};
