
import angular from 'angular';
import ngRoute from 'angular-route';
import uiRouter from 'angular-ui-router';
import IndexController from './controllers/IndexController';
import AuthService from './services/AuthService';
import routesProvider from './routes/routesProvider';
import * as routes from './routes/routes';

angular.module('app', [ngRoute, uiRouter])
    .controller("IndexController", IndexController)
    .service("AuthService", AuthService)
    .provider('routesProvider', routesProvider)
    .run(bootstrap);

function bootstrap(routesProvider) {
    routesProvider.configureStates(routes.routes);
}

