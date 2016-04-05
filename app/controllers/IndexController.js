export default function($scope, AuthService, $location) {
    var vm = this;
    if (sessionStorage.credentials) {
        $location.path('/loggedin');
    } else {
        window.location = AuthService.BuildAuthUrl();
    }
}