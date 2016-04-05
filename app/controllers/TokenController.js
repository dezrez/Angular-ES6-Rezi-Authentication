export default function(AuthService, $location, $rootScope) {
    var vm = this;
    if (AuthService.parseLocation(window.location.search).code) {
        let code = AuthService.parseLocation(window.location.search).code;
        AuthService.getToken(code, function() {
            $rootScope.$apply(function() {
                $location.path("/loggedin");
            });
        });
    } else {
        $location.path('/');
    }
}
