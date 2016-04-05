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
        state: 'rezi',
        config: {
            templateUrl: 'app/templates/token.html',
            url: '/Rezi/',
            controller: 'TokenController as vm'
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