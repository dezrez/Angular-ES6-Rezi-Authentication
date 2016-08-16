export default function ($scope, AuthService, $location) {
    var vm = this;
    if (sessionStorage.credentials) {
        let credentials = JSON.parse(sessionStorage.credentials);
        if (credentials.access_token) {
            vm.credentials = credentials;
        } else {
            $location.path('/');
        }
    } else {
        $location.path('/');
    }
}