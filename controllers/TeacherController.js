studentLogin.controller('TeacherCtrl', function TeacherCtrl($scope, StudentsFactory) {

    //No methods for teachers. Can only see who is here and who is not.
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
  });
