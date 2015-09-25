studentLogin.controller('TeacherCtrl', function TeacherCtrl($scope, StudentsFactory) {

    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
  });
