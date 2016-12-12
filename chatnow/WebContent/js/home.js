var chat=angular.module('chat',['ngRoute']);
chat.config(function($routeProvider)
{
$routeProvider.when('/reg',
{
templateUrl:'views/reg.html',
controller:'regController'  
}).when('/login',
{
templateUrl : 'views/login.html',
controller : 'loginController'
}).when('/blog',
{
templateUrl : 'views/blog.html',
controller : 'blogController'
}).when('/forum',
{
	templateUrl : 'views/forum.html',
	controller : 'forumController'
	});
});     
chat.controller('regController',function($scope,$http)
{
console.log("iam in register controller");
$scope.reg=function()
{
console.log("in register function");
console.log("username:"+$scope.username);

console.log("password:"+$scope.password);

console.log("emailid:"+$scope.emailid);
console.log("contact:"+$scope.contact);

var UserDetails =
	{
		username:$scope.username,
		password:$scope.password,
		emailid:$scope.emailid,
		contact:$scope.contact
		
		
		
	};
      console.log("name:"+UserDetails.username);
      
      var res =$http.post("http://localhost:8080/chat/addUser",UserDetails);
      res.success(function(data,status,header,config)
    		  {
    	  console.log("status:"+status);
    	  var message;
    	  $scope.message="you are successfully registered";
    	  $scope.username="";
    	  $scope.password="";
    	  $scope.emailid="";
    	  $scope.contact="";
    	  

});
}
});

chat.controller('blogController', function($scope)
{
	console.log("iam in blog controller");
$scope.message="you are in blog page";
});
chat.controller('forumController', function($scope)
		{
	console.log("iam in forum controller");
		$scope.message="you are in forum page";
		});
