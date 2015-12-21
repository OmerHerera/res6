module.exports = function (grunt, options) {
    var tasks = ["browserify"];

    // computation...
    return {
        "browserify+babelify+es6": ["browserify"],
        "tasks": ["availabletasks"],
        "default": tasks
    };
};
