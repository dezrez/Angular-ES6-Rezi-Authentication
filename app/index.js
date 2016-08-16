import * as routes from './routes/routes';
import angular from 'angular';
import AuthService from './services/AuthService';
import IndexController from './controllers/IndexController';
import ngRoute from 'angular-route';
import routesProvider from './routes/routesProvider';
import TokenController from './controllers/TokenController';
import HomeController from './controllers/HomeController';
import uiRouter from 'angular-ui-router';

angular.module('app', [ngRoute, uiRouter])
    .controller("IndexController", IndexController)
    .controller("TokenController", TokenController)
    .controller("HomeController", HomeController)
    .service("AuthService", AuthService)
    .provider('routesProvider', routesProvider)
    .run(bootstrap);

function bootstrap(routesProvider) {
	sessionStorage.clear();
    routesProvider.configureStates(routes.routes);
}
