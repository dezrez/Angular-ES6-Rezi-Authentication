export default function($scope, AuthService, $location) {
    var vm = this;
    if(sessionStorage.credentials){
    	vm.credentials = JSON.parse(sessionStorage.credentials);
    } else {
    	$location.path('/');
    }
}