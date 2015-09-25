studentLogin.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};

    factory.students = [
      //Hard coded list of students within the class for the project.
        {
            name: 'Peter Gibson',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'John Maze',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Robert French',
            signedIn: false,
            signedOut: false
        },
        {
          name: 'Carl Benson',
          signedIn: false,
          signedOut: false
        }
    ];
    
    //Methods within the StudentsController
    return factory;
});
