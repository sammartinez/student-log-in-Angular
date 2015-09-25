studentLogin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    $scope.studentsHere = function(student) {
        student.here = true;
    };

    $scope.studentsNotHere = function(student) {
      student.notHere = true;
    };
});
