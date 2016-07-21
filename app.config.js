app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('StatisticSystem', {
            url: '/StatisticSystem',
            templateUrl: 'views/admin/templates/StatisticSystem.html'
        })

        .state('GroupsAndStudents', {
            url: '/GroupsAndStudents',
            templateUrl: 'views/admin/templates/GroupsAndStudents.html'
        })

        .state('Subjects', {
            url: '/Subjects',
            templateUrl: 'views/admin/templates/Subjects.html'
        })

        .state('StudentsInGroup', {
            url: '/StudentsInGroup',
            templateUrl: 'views/admin/templates/StudentsInGroup.html'
        })
        .state('TimeTableTesting', {
            url: '/TimeTableTesting',
            templateUrl: 'views/admin/templates/TimeTableTesting.html'
        })
        .state('AddNewTimeTable', {
            url: '/AddNewTimeTable',
            templateUrl: 'views/admin/templates/AddNewTimeTable.html'
        })
        .state('TestsOfSubject', {
            url: '/TestsOfSubject',
            templateUrl: 'views/admin/templates/TestsOfSubject.html'
        })
        .state('RegistrNewTest', {
            url: '/RegistrNewTest',
            templateUrl: 'views/admin/templates/RegistrNewTest.html'
        })
        .state('MoreOptionsForTest', {
            url: '/MoreOptionsForTest',
            templateUrl: 'views/admin/templates/MoreOptionsForTest.html'
        })
        .state('RegistrationTestTask', {
            url: '/RegistrationTestTask',
            templateUrl: 'views/admin/templates/RegistrationTestTask.html'
        })
        .state('GroupRoots', {
            url: '/GroupRoots',
            templateUrl: 'views/admin/templates/GroupRoots.html'
        })
         .state('RegisterNewAnministr', {
            url: '/RegisterNewAnministr',
            templateUrl: 'views/admin/templates/RegisterNewAnministr.html'
        })
           .state('admin-edit', {
            url: '/admin-edit',
            templateUrl: 'views/admin/templates/admin-edit.html'
        })


});