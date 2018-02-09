app.controller('manageCtrl', function($scope, $state, authService){
	// if(!authService.isLogin()){
	// 	$state.go('/');
	// }
	$scope.name = "Manage Controller";
});

app.controller('isLogin', function($scope, $state, $http, $cookies, $cookieStore, authService){
	// if(!authService.isLogin()){
	// 	$state.go('/');
	// }
	$scope.token = $cookieStore.get('token');
	$scope.user_id = $cookieStore.get('user_id');
	$scope.user_name = $cookieStore.get('user_name');
});

app.controller('registerCtrl', function($scope, $state, $http, $cookies, $cookieStore, authService){
	$scope.register = function(){
		var data = {
					'firstname': $scope.user.firstname,
					'lastname': $scope.user.lastname,
					'email': $scope.user.email,
					'username': $scope.user.username,
					'password': $scope.user.password,
					'mode': "web",
		};		
		console.log(data);
		alert("Welcome " + data.firstname);
		$state.go('login');
		// $http.post('http://128.199.99.119:8080/ULiveApi/api/auth', data, config )
		// 		.success(function(data, status, headers, config){
		// 			$cookieStore.put('token', data.token);
		// 			$cookieStore.put('user_id', data.user.user_id);
		// 			$cookieStore.put('user_name', data.user.user_name);
		// 			$state.go('isLogin');
		// 		})
		// 		.error(function(data, status, header, config){
		// 			alert("Something wrong!");
		// 			console.log('Error Detail::', 'data:' + data + ', status: '+ status + 'header: '+ header);
		// 			console.log('Error Config: ', config);
		// 		});
	};
});


app.controller('loginCtrl', function($scope, $state, $http, $cookies, $cookieStore, authService){
	$scope.login = function(){
		var data = {
					'username': $scope.auth.username,
					'password': $scope.auth.password,
					'mode': "web",
		};
		var config ={
			headers: {
				'x-organize-id': 'ide',
				'Content-Type': 'application/json'
			}
		};
		$http.post('http://128.199.99.119:8080/ULiveApi/api/auth', data, config )
				.success(function(data, status, headers, config){
					console.log(data);
					$cookieStore.put('token', data.token);
					$cookieStore.put('user_id', data.user.user_id);
					$cookieStore.put('user_name', data.user.user_name);
					$state.go('isLogin');
				})
				.error(function(data, status, header, config){
					alert("Something wrong!");
					console.log('Error Detail::', 'data:' + data + ', status: '+ status + 'header: '+ header);
					console.log('Error Config: ', config);
				});
	};
});
