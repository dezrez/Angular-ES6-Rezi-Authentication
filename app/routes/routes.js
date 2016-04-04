export const routes = [
    {
        state: 'index',
        config: {
            templateUrl: 'app/templates/index.html',
            url: '/',
            controller: 'IndexController as vm'
        }
    },
    {
        state: 'loggedin',
        config: {
            templateUrl: 'app/templates/loggedin.html',
            url: '/loggedin',
            controller: 'HomeController as vm'
        }
    },
    {
        state: 'otherwise',
        config: {
            templateUrl: 'app/templates/index.html',
            url: '/',
            controller: 'IndexController as vm'
        }
    }
];