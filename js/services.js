app.factory('authService', function($state, $http, $cookies, $cookieStore){
	function isLogin(){
		if ($cookieStore.get('token')!= null) {
			return true;
		}
	}

	function logout(){
		$cookieStore.remove("token");
		$cookieStore.remove("user_id");
		$cookieStore.remove("user_name");
		$state.go('/');
	}

	return {
		isLogin: isLogin,
		logout: logout,
	};
});
