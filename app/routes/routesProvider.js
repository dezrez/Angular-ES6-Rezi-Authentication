routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    this.$get = RouterHelper;
    $locationProvider.html5Mode(true);
    RouterHelper.$inject = ['$state'];

    function RouterHelper($state) {
        var hasOtherwise = false;

        var service = {
            configureStates: configureStates,
            getStates: getStates
        };

        return service;

        function configureStates(states, otherwisePath) {
            states.forEach(function(state) {
                $stateProvider.state(state.state, state.config);
            });
            if (otherwisePath && !hasOtherwise) {
                hasOtherwise = true;
                $urlRouterProvider.otherwise(otherwisePath);
            }
        }

        function getStates() { return $state.get(); }
    }
}