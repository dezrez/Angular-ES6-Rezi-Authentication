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
        state: 'home',
        config: {
            templateUrl: 'app/templates/home.html',
            url: '/home',
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