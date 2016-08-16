export default function($scope, $rootScope, AuthService, $location) {
    var vm = this;
    if (AuthService.parseLocation(window.location.search).code) {
        let code = AuthService.parseLocation(window.location.search).code;
        AuthService.getToken(code, function() {
            $rootScope.$apply(function() {
                $location.path("/home");
                $location.search("code", null); 
            });
        });
    } else {
        window.location = AuthService.BuildAuthUrl();
    }
}
