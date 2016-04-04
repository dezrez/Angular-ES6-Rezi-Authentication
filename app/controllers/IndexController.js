export default function($scope, AuthService) {
    var vm = this;
    if (AuthService.authenticated) {
        
    } else {
        window.location = AuthService.BuildAuthUrl();
    }
}