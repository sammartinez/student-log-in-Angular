studentLogin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {

    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    //Methods
    $scope.signIn = function(student) {
        student.signedIn = true;
    };

    $scope.signOut = function(student) {
      student.signedOut = true;
    };
});
