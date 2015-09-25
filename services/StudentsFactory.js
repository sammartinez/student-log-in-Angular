studentLogin.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};

    factory.students = [
        {
            name: "Sam Smith"
            signedIn: false,
            signedOut: false
        },
        {
            name: "Peter Gibson",
            signedIn: false,
            signedOut: false
        },
        {
            name: "John Maze",
            signedIn: false,
            signedOut: false
        },
        {
            name: "Robert French",
            signedIn: false,
            signedOut: false
        }
    ]
    return factory;
});
