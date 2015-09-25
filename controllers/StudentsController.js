studentLogin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {

    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    //Methods
    $scope.studentsHere = function(student) {
        student.areHere = true;
    };

    $scope.studentsNotHere = function(student) {
      student.areNotHere = true;
    };
});
